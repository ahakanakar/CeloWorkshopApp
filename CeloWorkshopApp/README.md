# Celo Workshop App

Celo blockchain üzerinde çalışan bir dApp örneği. Minipay ve diğer Celo cüzdanlarıyla entegre çalışır.

## Özellikler

- ✅ Celo Mainnet ve Alfajores Testnet desteği
- ✅ Minipay cüzdan entegrasyonu
- ✅ RainbowKit ile kolay cüzdan bağlantısı
- ✅ Wagmi ile blockchain etkileşimi
- ✅ Next.js 16 ile modern React uygulaması
- ✅ TypeScript desteği
- ✅ Tailwind CSS ile modern UI

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. WalletConnect Project ID'yi ayarlayın:
   - `app/providers.tsx` dosyasındaki `YOUR_PROJECT_ID` değerini değiştirin
   - WalletConnect Cloud'dan ücretsiz bir Project ID alın: https://cloud.walletconnect.com

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın

## Kullanım

1. "Cüzdanınızı Bağlayın" butonuna tıklayın
2. Minipay veya desteklenen diğer cüzdanları seçin
3. Cüzdanınızı bağlayın ve Celo blockchain ile etkileşime geçin

## Desteklenen Cüzdanlar

- Minipay
- Valora
- MetaMask
- WalletConnect uyumlu tüm cüzdanlar

## Teknolojiler

- **Next.js 16** - React framework
- **Wagmi** - React Hooks for Ethereum
- **RainbowKit** - Cüzdan bağlantı UI
- **@celo/rainbowkit-celo** - Celo chain desteği
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Styling

## Geliştirme

Projeyi geliştirmek için:

```bash
# Geliştirme modu
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Linting
npm run lint
```

## Lisans

MIT
