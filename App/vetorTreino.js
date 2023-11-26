// Página usada para gerar treinos a partir de um vetor 
// de treinos sendo de ganhar massa ou perder peso


// PRIMEIRO TREINO PARA GANHAR MASSA
export const treinoMassa=[
    {
        id: '1',
        nomeExercicio: 'SUPINO RETO',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        tipoMusculo: 'Peitoral',
        imagem: require('./imagem/supinoReto.gif')
    },
    {
        id: '2',
        nomeExercicio: 'LEG PRESS',
        quantidadeRepeticoes: 'Repetições: 10x',
        qtdSeries: 'Séries: 4',
        tipoMusculo: 'Quadríceps',
        imagem: require('./imagem/legPress.gif')
    },
    {
        id:'3',
        nomeExercicio: 'BÍCEPS BARRA',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        tipoMusculo: 'Bíceps',
        imagem: require('./imagem/bicepsBarra.webp')
    },
    {
        id: '4',
        nomeExercicio: 'REMADA',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        tipoMusculo: 'Costas',
        imagem: require('./imagem/remadaHalter.gif')
    },
    {
        id: '5',
        nomeExercicio: 'PANTURRILHA HALTERES',
        quantidadeRepeticoes: 'Repetições: 10x',
        qtdSeries: 'Séries: 4',
        tipoMusculo: 'Panturrilha',
        imagem: require('./imagem/panturrilhaHalter.webp')
    },
    {
        id: '6',
        nomeExercicio: 'TRÍCEPS HALTER',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        tipoMusculo: 'Tríceps',
        imagem: require('./imagem/tricepsHalter.gif')
    },
]

// SEGUNDO TREINO PARA PERDER PESO
export const treinoPerderPeso=[
    {
        nomeExercicio: 'CORDA NAVAL',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        imagem: require('./imagem/cordaNaval.gif')
    },
    {
        nomeExercicio: 'PULAR CORDA',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        imagem: require('./imagem/pularCorda.webp')
    },
    {
        nomeExercicio: 'ABDOMINAL',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        imagem: require('./imagem/abdominal.webp')
    },
    {
        nomeExercicio: 'POLICHINELO',
        quantidadeRepeticoes: 'Repetições: 12x',
        qtdSeries: 'Séries: 4',
        imagem: require('./imagem/polichinelo.webp')
    },
    {
        nomeExercicio: 'ESTEIRA',
        tempo: '20 Minutos',
        imagem: require('./imagem/esteira.webp')
    },
]




