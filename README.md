# film-tv-takip-listesi

🎬 Film ve Dizi Takip Uygulaması

Kullanıcının izlediği veya izlemeyi planladığı film ve dizileri kolayca takip edebilmesini sağlayan sade ve işlevsel bir web uygulamasıdır. Uygulama üzerinden içerik ekleme, puan verme, not alma, düzenleme ve listeleme işlemleri yapılabilir. Tüm veriler tarayıcı LocalStorage’ında saklanır.


✨ Temel Özellikler

📅 İzleme tarihi belirleme


🎞️ Film/dizi adı, türü, tarih ve not ile kayıt ekleyebilme


✅ İzlenme durumu belirtme (İzlendi / İzlenmedi)


⭐ 1–5 arası puan verebilme


📝 Kayıtlara not ekleyebilme


🔍 Film/dizi adına göre arama yapabilme


✏️ Mevcut kayıtları düzenleyebilme


🗑️ Kayıtları silebilme veya tüm listeyi temizleyebilme


💾 Verileri tarayıcıda kalıcı olarak saklama (LocalStorage)


🚀 Projeyi Çalıştırma

Uygulama ES6 modülleri kullandığı için doğrudan tarayıcıda çalıştırılamaz. Yerel sunucu gereklidir.


Live Server ile çalıştırmak için:


Projeyi indirin veya klonlayın


Visual Studio Code ile açın


Terminali açın ve şu komutu yazın:


live-server


Uygulama varsayılan tarayıcıda otomatik olarak açılır

💡 Not: Live Server eklentisinin Visual Studio Code’da yüklü olması gerekir.



🛠️ Teknik Detaylar


Arayüz: HTML5 + Bootstrap 5

Stil: css/style.css

JavaScript: Vanilla JS (ES6+ modüller)

JS Dosyaları:

app.js: Ana uygulama koordinasyonu


ui.js: Arayüz ve DOM işlemleri


localStorage.js: Verilerin saklanması


utils/date.js: Tarih formatlama aracı


💾 Veri Saklama
Uygulamadaki tüm içerikler tarayıcı LocalStorage alanında tutulur. Sayfa yenilense veya tarayıcı kapatılsa bile veriler korunur. Ancak bu yöntem hassas veri saklamak için uygun değildir.

📁 Dosya Yapısı

film-tv-takip-uygulamasi/

├── css/

│   └── style.css

├── js/

│   ├── utils/

│   │   └── date.js

│   ├── app.js

│   ├── localStorage.js

│   └── ui.js

├── index.html

└── README.md

ℹ️ Bilgilendirme

Bu uygulama bireysel kullanım ve eğitim amaçlı geliştirilmiştir. Tüm veriler sadece kullanıcının tarayıcısında saklanır ve herhangi bir dış kaynakla paylaşılmaz.
