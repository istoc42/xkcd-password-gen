const passwordElsOutput = document.getElementById('passwordElements')
const passwordOutput = document.getElementById('password')
const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById('copy')

const words = [
  'acid',
  'aged',
  'also',
  'area',
  'army',
  'away',
  'baby',
  'back',
  'ball',
  'band',
  'bank',
  'base',
  'bath',
  'bear',
  'beat',
  'been',
  'beer',
  'bell',
  'belt',
  'best',
  'bill',
  'bird',
  'blow',
  'blue',
  'boat',
  'body',
  'bomb',
  'bond',
  'bone',
  'book',
  'boom',
  'born',
  'boss',
  'both',
  'bowl',
  'bulk',
  'burn',
  'bush',
  'busy',
  'call',
  'calm',
  'came',
  'camp',
  'card',
  'care',
  'case',
  'cash',
  'cast',
  'cell',
  'chat',
  'chip',
  'city',
  'club',
  'coal',
  'coat',
  'code',
  'cold',
  'come',
  'cook',
  'cool',
  'cope',
  'copy',
  'core',
  'cost',
  'crew',
  'crop',
  'dark',
  'data',
  'date',
  'dawn',
  'days',
  'dead',
  'deal',
  'dean',
  'dear',
  'debt',
  'deep',
  'deny',
  'desk',
  'dial',
  'dick',
  'diet',
  'disc',
  'disk',
  'does',
  'done',
  'door',
  'dose',
  'down',
  'draw',
  'drew',
  'drop',
  'drug',
  'dual',
  'duke',
  'dust',
  'duty',
  'each',
  'earn',
  'ease',
  'east',
  'easy',
  'edge',
  'else',
  'even',
  'ever',
  'evil',
  'exit',
  'face',
  'fact',
  'fail',
  'fair',
  'fall',
  'farm',
  'fast',
  'fate',
  'fear',
  'feed',
  'feel',
  'feet',
  'fell',
  'felt',
  'file',
  'fill',
  'film',
  'find',
  'fine',
  'fire',
  'firm',
  'fish',
  'five',
  'flat',
  'flow',
  'food',
  'foot',
  'ford',
  'form',
  'fort',
  'four',
  'free',
  'from',
  'fuel',
  'full',
  'fund',
  'gain',
  'game',
  'gate',
  'gave',
  'gear',
  'gene',
  'gift',
  'girl',
  'give',
  'glad',
  'goal',
  'goes',
  'gold',
  'Golf',
  'gone',
  'good',
  'gray',
  'grew',
  'grey',
  'grow',
  'gulf',
  'hair',
  'half',
  'hall',
  'hand',
  'hang',
  'hard',
  'harm',
  'hate',
  'have',
  'head',
  'hear',
  'heat',
  'held',
  'hell',
  'help',
  'here',
  'hero',
  'high',
  'hill',
  'hire',
  'hold',
  'hole',
  'holy',
  'home',
  'hope',
  'host',
  'hour',
  'huge',
  'hung',
  'hunt',
  'hurt',
  'idea',
  'inch',
  'into',
  'iron',
  'item',
  'jack',
  'jane',
  'jean',
  'john',
  'join',
  'jump',
  'jury',
  'just',
  'keen',
  'keep',
  'kent',
  'kept',
  'kick',
  'kill',
  'kind',
  'king',
  'knee',
  'knew',
  'know',
  'lack',
  'lady',
  'laid',
  'lake',
  'land',
  'lane',
  'last',
  'late',
  'lead',
  'left',
  'less',
  'life',
  'lift',
  'like',
  'line',
  'link',
  'list',
  'live',
  'load',
  'loan',
  'lock',
  'logo',
  'long',
  'look',
  'lord',
  'lose',
  'loss',
  'lost',
  'love',
  'luck',
  'made',
  'mail',
  'main',
  'make',
  'male',
  'many',
  'mark',
  'mass',
  'matt',
  'meal',
  'mean',
  'meat',
  'meet',
  'menu',
  'mere',
  'mike',
  'mile',
  'milk',
  'mill',
  'mind',
  'mine',
  'miss',
  'mode',
  'mood',
  'moon',
  'more',
  'most',
  'move',
  'much',
  'must',
  'name',
  'navy',
  'near',
  'neck',
  'need',
  'news',
  'next',
  'nice',
  'nick',
  'nine',
  'none',
  'nose',
  'note',
  'okay',
  'once',
  'only',
  'onto',
  'open',
  'oral',
  'over',
  'pace',
  'pack',
  'page',
  'paid',
  'pain',
  'pair',
  'palm',
  'park',
  'part',
  'pass',
  'past',
  'path',
  'peak',
  'pick',
  'pink',
  'pipe',
  'plan',
  'play',
  'plot',
  'plug',
  'plus',
  'poll',
  'pool',
  'poor',
  'port',
  'post',
  'pull',
  'pure',
  'push',
  'race',
  'rail',
  'rain',
  'rank',
  'rare',
  'rate',
  'read',
  'real',
  'rear',
  'rely',
  'rent',
  'rest',
  'rice',
  'rich',
  'ride',
  'ring',
  'rise',
  'risk',
  'road',
  'rock',
  'role',
  'roll',
  'roof',
  'room',
  'root',
  'rose',
  'rule',
  'rush',
  'ruth',
  'safe',
  'said',
  'sake',
  'sale',
  'salt',
  'same',
  'sand',
  'save',
  'seat',
  'seed',
  'seek',
  'seem',
  'seen',
  'self',
  'sell',
  'send',
  'sent',
  'sept',
  'ship',
  'shop',
  'shot',
  'show',
  'shut',
  'sick',
  'side',
  'sign',
  'site',
  'size',
  'skin',
  'slip',
  'slow',
  'snow',
  'soft',
  'soil',
  'sold',
  'sole',
  'some',
  'song',
  'soon',
  'sort',
  'soul',
  'spot',
  'star',
  'stay',
  'step',
  'stop',
  'such',
  'suit',
  'sure',
  'take',
  'tale',
  'talk',
  'tall',
  'tank',
  'tape',
  'task',
  'team',
  'tech',
  'tell',
  'tend',
  'term',
  'test',
  'text',
  'than',
  'that',
  'them',
  'then',
  'they',
  'thin',
  'this',
  'thus',
  'till',
  'time',
  'tiny',
  'told',
  'toll',
  'tone',
  'tony',
  'took',
  'tool',
  'tour',
  'town',
  'tree',
  'trip',
  'true',
  'tune',
  'turn',
  'twin',
  'type',
  'unit',
  'upon',
  'used',
  'user',
  'vary',
  'vast',
  'very',
  'vice',
  'view',
  'vote',
  'wage',
  'wait',
  'wake',
  'walk',
  'wall',
  'want',
  'ward',
  'warm',
  'wash',
  'wave',
  'ways',
  'weak',
  'wear',
  'week',
  'well',
  'went',
  'were',
  'west',
  'what',
  'when',
  'whom',
  'wide',
  'wife',
  'wild',
  'will',
  'wind',
  'wine',
  'wing',
  'wire',
  'wise',
  'wish',
  'with',
  'wood',
  'word',
  'wore',
  'work',
  'yard',
  'yeah',
  'year',
  'your',
  'zero',
  'zone',
]

// Function to get random numbers
function getRandomInt() {
  return Math.floor(Math.random() * (words.length + 1))
}

// Handle generate password button
generateBtn.addEventListener('mouseup', (e) => {
  // Clear the output area
  passwordOutput.innerText = ''

  // Show copy to clipboard button
  copyBtn.classList.remove('hidden')

  // Get the random numbers
  let first = getRandomInt(500)
  let second = getRandomInt(500)
  let third = getRandomInt(500)
  let fourth = getRandomInt(500)

  // Log the numbers chosen
  let chosenNumbers = `${first} ${second} ${third} ${fourth}`
  console.log(`Random numbers chosen: ${chosenNumbers}`)

  // Initial array for words
  let randomwords = []

  // Push words to the array using random numbers as index
  randomwords.push(words[first])
  randomwords.push(words[second])
  randomwords.push(words[third])
  randomwords.push(words[fourth])

  // Turn the arrays into strings
  const passwordEls = randomwords.join(', ')
  const passwordConcat = randomwords.join('')

  // Send strings to the output element
  passwordElsOutput.innerText = `Your new password is: ${passwordEls}`
  passwordOutput.innerText = `${passwordConcat}`
})

copyBtn.addEventListener('mouseup', (e) => {
  const newPassword = passwordOutput.innerText
  navigator.clipboard.writeText(newPassword)
  alert(`Copied ${newPassword} to the clipboard`)
})
