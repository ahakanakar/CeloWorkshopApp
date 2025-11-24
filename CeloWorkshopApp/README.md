# Celo Token Claimer

Celo blockchain üzerinde çalışan bir dApp örneği. Minipay ve diğer Celo cüzdanlarıyla entegre çalışır. Kullanıcılar cüzdanlarını bağlayarak ücretsiz token claim edebilirler.

## 🚀 Özellikler

- ✅ Celo Mainnet ve Alfajores Testnet desteği
- ✅ Token Claimer - Her cüzdan için bir kez token claim
- ✅ Minipay cüzdan entegrasyonu
- ✅ RainbowKit ile kolay cüzdan bağlantısı
- ✅ Wagmi ile blockchain etkileşimi
- ✅ Next.js 16 ile modern React uygulaması
- ✅ TypeScript desteği
- ✅ Tailwind CSS ile modern ve responsive UI
- ✅ Header ile network ve cüzdan bilgisi gösterimi

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
3. Cüzdanınızı bağlayın
4. Celo Mainnet veya Alfajores Testnet'e geçin
5. "Token Claimer" bölümünden token claim edin (her cüzdan için bir kez)

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

## 📦 Deployment

Bu proje Vercel, Netlify veya diğer Next.js destekleyen platformlara deploy edilebilir.

### Vercel ile Deploy

1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Environment variables ekleyin (gerekirse)
5. Deploy butonuna tıklayın

## 🔗 Linkler

- **GitHub Repository**: https://github.com/ahakanakar/CeloWorkshopApp
- **WalletConnect Cloud**: https://cloud.walletconnect.com

## 📝 Notlar

- Token Claimer özelliği şu anda localStorage kullanarak demo amaçlı çalışmaktadır
- Gerçek bir uygulamada smart contract ile entegre edilebilir
- WalletConnect Project ID gereklidir (ücretsiz alınabilir)

## Lisans

MIT
