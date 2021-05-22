https://hasankarasahin.github.io/Morse2Text/

# Mors To Text


[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Mors To Text , metinleri Mors alfabesine ve Mors alfabesini de metinlere çeviren web uygulamasıdır.


#### 1 - Gereksinimler

- Uygulama 2 ayrı arayüze sahip olmalıdır.
- 1 . arayüz Latin alfabesindeki metin alanına yazılan metinleri Mors alfabesine dönüştürmelidir; 2 . arayüz Mors alfabesiyle yazılmış metin alanlarındaki metinleri Latin alfabesine dönüştürmelidir.
- Arka uç servis tek bir komutla çalıştırılmalı ve arayüz bu servis ile iletişim kurabilmelidir.
- Bağlı ve bağlantısı kesilmiş istemciler için günlük kaydı yapılmalıdır.
- Uygulamanın ve arayüzün nasıl çalıştırılacağı README dosyasında belgelenmelidir.


#### 2 - Kullanılan Teknolojiler

* [NodeJS](https://nodejs.org) - Açık kaynaklı, sunucu tarafında çalışan ve ağ bağlantılı uygulamalar için geliştirilmiş bir çalıştırma ortamıdır. Node.js uygulamaları genelde istemci tarafı betik dili olan JavaScript kullanılarak geliştirilir.

* [VueJS](https://vuejs.org) - Kullanıcı arayüzleri ve tek sayfa uygulamalar inşa etmek için kullanılan açık kaynak Javascript iskeleti.
* [Socket.io](https://socket.io/) - Gerçek zamanlı, çift yönlü ve olaya dayalı iletişimi sağlar.
* [Express](https://expressjs.com) - Node.js tabanlı web uygulama sunucu çatısı. Express.js, tek sayfa, çoklu sayfa ve hibrit web uygulamaları geliştirmeye yönelik tasarlanmıştır. 
* [Bootstrap + Vue](https://bootstrap-vue.js.org) - Kapsamlı ve otomatik WAI-ARIA erişilebilirlik işaretlemesi ile tamamlanan Vue.js 2.5+ için mevcut olan en kapsamlı Bootstrap V4 bileşenleri ve ızgara sistemi uygulamalarından birini sunar



#### 3 - Kurulum

Mors to Text 'in çalışması için [Node.js](https://nodejs.org/)  gerekli.

Bağımlılıkları ve devDependencies'i kurun ve sunucuyu başlatın.

```sh
$ cd Morse2Text/server
$ npm install -d
$ node app.js
```
Çıktı 

```sh
server running on port 3001
```


Tercih edilen tarayıcıda sunucu adresine giderek sunucunun çalıştığını doğruyabilirsiniz.

```sh
http://127.0.0.1:3001/
```

Clienti başlatmak için

```sh
$ cd Morse2Text
$ npm install -d
$ npm run serve
```

Proje Build edildikten sonra tercih edilen tarayıca belirlenen ip adresine gidilerek projeye giriş yapılır.

Örnek Çıktı 

```sh
 App running at:
  - Local:   http://localhost:8082/
  - Network: http://192.168.56.1:8082/

```
