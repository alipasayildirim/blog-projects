# 📘 Blog Post Manager – React + Shadcn UI + Tailwind CSS

Bu proje, React ve Shadcn UI kullanılarak geliştirilmiş bir blog post yönetim uygulamasıdır. Kullanıcılar yeni post ekleyebilir, mevcut postları düzenleyebilir ve hepsini liste halinde görüntüleyebilir.

---

## 🚀 Özellikler

- 📝 Blog post listeleme (title, description, image, author, date)
- ➕ Yeni post ekleme (Dialog modal ile)
- ✏️ Post düzenleme (Dialog modal ile)
- ✅ Toast bildirimleri (başarı ve hata mesajları)
- ❌ Boş alan kontrolü
- 🎨 Shadcn UI & Tailwind CSS ile modern tasarım

---

## 📁 Proje Yapısı

src/
│
├── components/
│ ├── blog/
│ │ ├── BlogList.jsx # Postları listeleyen ana bileşen
│ │ ├── BlogItem.jsx # Tek bir post kartı
│ │ ├── AddBlogItem.jsx # Post ekleme modal bileşeni
│ │ └── EditBlogItem.jsx # Post düzenleme modal bileşeni
│ └── ui/ # Shadcn UI bileşenleri (Button, Dialog, Card, etc.)
│
├── data/
│ └── blogData.js # Başlangıç blog post verileri
│
├── App.jsx # Uygulamanın giriş noktası
└── main.jsx # React DOM root


## 📦 Kurulum

```bash
# 1. Projeyi klonla
git clone https://github.com/kullaniciadi/blog-project.git

# 2. Proje klasörüne gir
cd blog-project

# 3. Gerekli bağımlılıkları yükle
npm install

# 4. Uygulamayı başlat
npm run dev
