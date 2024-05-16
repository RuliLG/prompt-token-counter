import { encodingForModel } from "js-tiktoken";

export default class Tokenizer {
    static singleton = new Tokenizer();

    encodings = {}

    availableModels = {
        'gpt-4o': 'GPT-4o',
        'gpt-4': 'GPT-4',
        'gpt-4-vision-preview': 'GPT-4 Vision',
        'gpt-3.5-turbo': 'ChatGPT (GPT-3.5 Turbo)',
        'text-davinci-003': 'Davinci',
        'text-curie-001': 'Curie',
        'text-babbage-001': 'Babbage',
        'text-ada-001': 'Ada',
    }

    constructor() {
        for (const [key, value] of Object.entries(this.availableModels)) {
            this.encodings[key] = encodingForModel(key)
        }
    }

    numberOfTokens(input) {
        const tokens = {}
        for (const [key, value] of Object.entries(this.availableModels)) {
            tokens[key] = this.encode(input, key).length
        }

        return tokens
    }

    encode(input, model) {
        return this.encodings[model].encode(input)
    }
}
