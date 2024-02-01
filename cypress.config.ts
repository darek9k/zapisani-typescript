import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://testy-zadanie.zapisani.dev/',
    supportFile: 'cypress/support/commands.ts'
  }
})

