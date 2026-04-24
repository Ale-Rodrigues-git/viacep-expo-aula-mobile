# 📱 ViaCEP Expo - Aula de Desenvolvimento Mobile

App de busca de CEP desenvolvido com **React Native + Expo** para demonstrar conceitos fundamentais de desenvolvimento mobile.

## 🚀 Funcionalidades

- 🔍 **Busca de CEP**: Integração com API ViaCEP
- 📱 **Interface Mobile**: Design responsivo com SafeAreaView
- ⌨️ **Teclado Otimizado**: Numérico com dismiss automático
- ⚡ **Estados Reativos**: Loading e tratamento de erros
- 🔒 **TypeScript**: Tipagem forte para melhor DX

## 🛠️ Tecnologias Utilizadas

- **React Native 0.81.5**
- **Expo ~54.0.33**
- **TypeScript 5.3.3**
- **React Native Safe Area Context**

## 📚 Conceitos Aprendidos

### Setup do Projeto
- Configuração Expo
- Estrutura de pastas
- Dependências e tipos

### Componentes React Native
- `SafeAreaView` - Área segura da tela
- `TextInput` - Campo de entrada
- `TouchableOpacity` - Botão interativo
- `Text` - Exibição de texto

### Hooks e Estado
- `useState` - Gerenciamento de estado
- Estados: cep, cidade, erro, loading

### API e Requisições
- `fetch()` - Requisições HTTP
- Tratamento de respostas JSON
- Error handling

### TypeScript
- Interfaces para tipagem
- Tipos opcionais
- Type safety

### Estilização Mobile
- StyleSheet API
- Layout responsivo
- Cores e temas

## 🏃‍♂️ Como Executar

```bash
# Instalar dependências
npm install

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web
```

## 📱 Testando o App

1. Digite um CEP (ex: 01310100)
2. Toque em "Buscar"
3. Veja o resultado ou mensagem de erro

## 🎯 API Utilizada

**ViaCEP** - API gratuita para consulta de CEPs brasileiros
- URL: `https://viacep.com.br/ws/{cep}/json/`
- Documentação: [viacep.com.br](https://viacep.com.br/)

## 📂 Estrutura do Projeto

```
viacep-expo-aula-mobile/
├── App.tsx                 # Componente principal
├── App.js                  # Backup em JavaScript
├── index.js                # Ponto de entrada
├── tsconfig.json           # Configuração TypeScript
├── package.json            # Dependências
├── app.json               # Configuração Expo
├── types/
│   └── via-cep-response.ts # Tipos TypeScript
└── assets/                # Imagens e ícones
```

## 🤝 Contribuição

Este projeto foi desenvolvido como material didático para aula prática de desenvolvimento mobile.

## 📄 Licença

Este projeto é para fins educacionais.

---

**Desenvolvido por:** Alessandro Rodrigues
**Data:** Abril 2026</content>
<parameter name="filePath">c:\Users\Aluno\Desktop\viacep-expo-master\README.md