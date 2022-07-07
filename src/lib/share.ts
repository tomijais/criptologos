import { solutionIndex, unicodeSplit } from './words'
import { GAME_TITLE, GAME_URL } from '../constants/strings'
import { MAX_CHALLENGES } from '../constants/settings'
import { UAParser } from 'ua-parser-js'

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

export const shareStatus = (
    guesses: string[],
    lost: boolean,
    isHardMode: boolean,
    isDarkMode: boolean,
    isHighContrastMode: boolean,
    handleShareToClipboard: () => void
) => {
    const textToShare =
        `${GAME_TITLE} ${solutionIndex} ${
            lost ? 'X' : guesses.length
        }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
        generateEmojiGrid(
            guesses,
            getEmojiTiles(isDarkMode, isHighContrastMode),
            lost
        ) +
        `\n\n${GAME_URL}`

    const shareData = { text: textToShare }

    let shareSuccess = false

    try {
        if (attemptShare(shareData)) {
            navigator.share(shareData)
            shareSuccess = true
        }
    } catch (error) {
        shareSuccess = false
    }

    if (!shareSuccess) {
        navigator.clipboard.writeText(textToShare)
        handleShareToClipboard()
    }
}

export const generateEmojiGrid = (
    guesses: string[],
    tiles: string[],
    isGameLost: boolean
) => {
    return guesses
        .map((guess, i) => {
            const splitGuess = unicodeSplit(guess)
            if (guesses.length - 1 === i && !isGameLost) {
                return splitGuess
                    .map((_) => {
                        return tiles[0]
                    })
                    .join('')
            }
            return splitGuess
                .map((_) => {
                    return tiles[2]
                })
                .join('')
        })
        .join('\n')
}

const attemptShare = (shareData: object) => {
    return (
        // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
        browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
        webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
        navigator.canShare &&
        navigator.canShare(shareData) &&
        navigator.share
    )
}

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean) => {
    let tiles: string[] = []
    tiles.push(isHighContrastMode ? '🟧' : '🟩')
    tiles.push(isHighContrastMode ? '🟦' : '🟨')
    tiles.push(isDarkMode ? '⬛' : '⬜')
    return tiles
}
