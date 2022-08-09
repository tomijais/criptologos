interface StringMap {
    [key: string]: string
}

export const WORDS_DESCRIPTION: StringMap = {
    ANC: 'Anchor es un protocolo de préstamos dentro del ecosistema Terra, que jugó un rol muy importante en el colapso de UST. Anchor pagaba una tasa del 20% anual a quienes depositaran UST, generando un crecimiento enorme en la demanda de la stablecoin. Durante el colapso, la cantidad de dinero depósitado en Anchor disminuyó rápidamente, contribuyendo a generar mayor pánico en el ecosistema.',
    OPENSEA:
        'Es el marketplace de NFTs más grande del mundo. Permite a los usuarios comprar y vender NFTs de distintas colecciones de forma segura.',
    BNB: 'Es la moneda nativa de la Binance Smart Chain, una blockchain proof-of-stake creada por Binance, el exchange de criptomonedas más grande del mundo (a junio del 2022).',
    SAND: 'Es un metaverso orientado principalmente a gaming. Podríamos decir que es el "minecraft" de la web3.',
    ALGO: 'Es una blockchain fundada por Silvio Micali, un profesor del MIT, que desarrollo un novedoso mecanismo de consenso Proof-of-Stake para lograr mayor escalabilidad que otras blockchains como Ethereum.',
    GLMR: 'Es una parachain de Polkadot diseñada para conectar el ecosistema Ethereum con la red de Polkadot. Incorpora todas las herramientas para desarrolladores de Ethereum con el fin de acelerar el desarrollo de la red.',
    USDT: 'Es una stablecoin que sigue el valor del dólar. Depende de una empresa centralizada, Tether. Es posible emitir USDT enviando dólares a la companía, que cobra una comisión por el servicio. Los dólares que se envían para emitir USDT se usan para comprar activos financieros de bajo riesgo, que respaldan el valor de USDT.',
    USDC: 'Es una stablecoin que sigue el valor del dólar. Es emitida por Circle, una empresa centralizada asociada a Coinbase. Los USDC están respaldados por dólares que Circle controla.',
    MKR: 'MakerDAO es la DAO detrás de DAI. Permite que cualquiera emita DAI depositando otras cripto como colateral. A nivel conceptual, funciona como una gran casa de empeño digital: los usuarios depositan cripto a modo de garantía y reciben DAI recién emitido. Para recuperar sus cripto, deben devolver los DAI prestados.',
    BTC: 'No hay mucho que decir.  Simplemente una  genial, la invención más grande de la humanidad desde ¿el fuego?¿la rueda?¿internet? En fin... una gran invención. Si todavía no sabés bien como funciona tenemos un curso gratis en solow.io 😉',
    DOT: 'Podemos definirlo como un ecosistema de blockchains interconectadas. Es una plataforma que permite que muchas blockchains se conecten entre sí, formando una gran red con una seguridad compartida.',
    SOL: 'Solana es una blockchain monolítica que apunta apunta a lograr una máxima escalabilidad a través de algunas innovaciones tecnológicas como proof-of-history.',
    XTZ: 'Tezos es una de las primeras blockchains en usar Proof-of-stake. Tiene un diseño bastante innovador que permite a los tenedores del token XTZ decidir sobre que actualizaciones realizar a la red, evitando que esta se forkee.',
    ETH: 'Una gran computadora virtual. Una máquina infinita. Es una plataforma que permite que cualquiera programe contratos inteligentes y los ofrezca al mundo entero, de forma 100% descentralizada.',
    XRP: 'XRP es la moneda nativa de Ripple, una blockchain orientada a crear un sistema de pago global para las instituciones bancarias. Apunta a generar infraestructura que permita realizar transferencias más rápidas y baratas. Hay mucho debate acerca de la alta centralización del proyecto, contraria a los valores que promueve Satoshi en el whitepaper de Bitcoin.',
    CVX: 'CVX es un protocolo construido sobre Curve, el mayor DEX de stablecoins del mercado. Permite a los inversores obtener rendimientos extra en CVX depositando liquidez en Curve a través de Convex.',
    WAVES: 'Es una blockchain Proof of Stake centrada en ofrecer financiación a proyectos y startups. A diferencia de Ethereum, los smart contracts de Waves no son Touring Complete, por lo que permiten construir aplicaciones mucho más limitadas. Quizá "Touring Complete" sea una buena palabra para otro día de Criptdle...',
    ATOM: 'ATOM es el token de Cosmos, un ecosistema de blockchains interoperables. En lugar de una super blockchain que ejecute millones de transacciones, Cosmos creó un framework para que sea fácil crear muchas blockchains y conectarlas entre sí. ',
    MIR: 'Un protocolo icónico del auge y caída de Terra. Permite emitir tokens que reflejan el precio de una acción del mundo real.',
    MINA: 'Mina es una blockchain que usa SNARKs (una forma de Zero Knowledge Proof) para reducir la cantidad de información guardada en la blockchain. Esto es importante porque hace que correr un nodo sea más fácil; no hace falta una super compu para guardar miles de gigas, lo cual permite que más personas tengan un nodo y la red sea más descentralizada.',
    GRT: 'The graph es el Google de Web3. Indexa y organiza la información para que sea más rápido y barato acceder a información dentro de la blockchain. Pero lo más interesante es el mecanismo de incentivos que tienen. Conocelo en Solow.io.',
    LINK: 'Es el protocolo de oráculos descentralizados más grande del mundo. Permite que los smart contracts de varias blockchains accedan a data del mundo real; como el precio de ETH, el clima en Nueva Guinea o quien es el 9 del Real Madrid',
    ZAPPER: 'Zapper es una herramienta para interactuar con web3. Empezó siendo simplemente un dashboard para llevar un registro de tus wallets pero de a poco incorporó funciones para interactuar con cripto directamente desde su interfaz. Incluye NFTs, DeFi y DAOs en varias redes.',
    BUSD: 'BUSD es la stablecoin de Binance, emitida por Paxos con respaldo 1 a 1 con dólares en reserva. Lo curioso es que los BUSD originales son emitidos sobre Ethereum (ERC-20). Binance crea BUSD nativos a la BSC holdeando BUSD ERC-20 como reserva en un contrato sobre Ethereum. ',
    NEAR: 'Near es una blockchain Layer 1 que usa sharding para lograr mayor escalabilidad. La blockchain actúa como un protocolo sobre el cual se pueden construir distintas soluciones, incluídas blockchains de capa 2 con distintas funcionalidades.',
    ZIL: 'Ziliqa es una blockchain con una tecnología muy curiosa: utiliza un mecanismo de consenso que combina proof-of-work y pBFT al mismo tiempo que aplica sharding al procesamiento de la información. Permite contratos inteligentes escritos en un lenguaje de programación propio: Scilla. ',
    SLP: 'Es el token emblema de Axie Infinity, ya que se usa para pagar a los jugadores del primer gran play-to-earn del ecosistema cripto. No debe confundirse con AXS, que es el token que se usa para la gobernanza de Axie.',
    LUNA: 'Bueno... Luna, Luna Classic, es todo muy confuso. Luna Classic es la moneda original del ecosistema Terra, que fue "reemplazada" por Luna (2.0) luego de, literalmente, irse a cero.',
    EXACTLY:
        'Exactly es un proyecto con fundadores argentinos que apunta a permitir renta fija en DeFi. Cuando pedís o das un préstamo en AAVE o Compound, la tasa es variable. Exactly desarrolló un novedoso sistema de tasas y pooles de liquidez que permite ofrecer tanto renta variable como fija.',
    CHZ: 'Chiliz apunta a unir el mundo cripto con el deporte, permitiendo que equipos de distintos deportes emitan sus propios tokens, NFTs y productos deportivos. Es una blockchain que funciona con Proof-of-Authority y depende de la empresa socios.com. Instituciones como la Juventus o el PSG ya emitieron sus tokens usando Chiliz. ¿Una buena apuesta antes del mundial? NFA',
    ZERION: 'Zerion es un dashboard web3 que simplifica la interacción con proyectos DeFi y el seguimiento de tus wallets. Tiene swaps, bridges y varias funcionalidades más incorporadas.',
    FTT: 'FTT es el token de FTX, uno de los exchanges más importantes del mundo. Otorga distintos beneficios a quienes utilizan productos del ecosistema FTX',
    BCH: 'BCH nace del primer hard fork que sufre Bitcoin, luego de las llamadas guerras de escalabilidad. BCH ajusta algunos parámetros de Bitcoin para lograr mayor escalabilidad. Es una red que no tuvo mucho apoyo de la comunidad y hoy no se usa demasiado.',
    FTM: 'Fantom no es una blockchain. En realidad es una DLT. En la práctica, no hay muchas diferencias para el usuario final. Es EVM compatible y tiene un mecanismo de consenso Proof-of-Stake, basado en FTM.',
    ELEMENT:
        'Element es un proyecto la diferencia de precio entre ETH y stETH para ofrecer una tasa fija. Si uno compra stETH lockeado por 1 año a 0.95 ETH, quiere decir que ganará aproximadamente un 5% si espera un año, por lo que es comparable a una tasa de interés fija.',
}
