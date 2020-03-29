### How to run the expo app

Have node and npm installed on your machine. [Node installation](https://nodejs.org/en/download/)

```
sudo npm i -g expo-cli
```

Meanwhile, download the [Expo app](https://play.google.com/store/apps/details?id=host.exp.exponent) on your phone and create an account.
You may need to open another terminal window after the installation.

```
expo login
```


Login in your app as well.

Now you're good to go.

```
git clone https://github.com/jmfantin2/rn_negocio_direto.git
cd rn_negocio_direto
yarn
expo start
```

The Expo Bundler will be prompted in your terminal or the default browser.

Before activating the app in your phone, note two different settings:
**LAN (default)** - Communicate development to local build through your personal network. (i. e. your home Wi-Fi)
**Tunnel** - Communicate development to local build through different networks, using the expo bridge.

Knowing which one suits your needs (generally LAN, unless your computer and phone are connected to different networks), open the QR-Code reader in the Expo app and scan the code on screen.

Modifying the code will hot refresh the application. 
