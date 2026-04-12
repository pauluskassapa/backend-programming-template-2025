# Backend Programming - Gacha API

Project ini dibuat untuk tugas backend programming menggunakan Node.js, Express, dan MongoDB.
Aplikasi ini mensimulasikan sistem gacha sederhana dengan beberapa fitur tambahan.

---

## Fitur

### Fitur utama

- Gacha (ambil hadiah random)
- Maksimal 5x gacha per hari per user
- Data disimpan ke database MongoDB

### Bonus

- Melihat history gacha user
- Melihat daftar reward dan sisa kuota
- Melihat pemenang (nama disensor)

---

## Cara menjalankan

1. Clone repository

```
git clone <link-repo>
```

2. Install dependency

```
npm install
```

3. Buat file `.env`

```
PORT=3001
MONGO_URI=your_mongodb_connection
```

4. Jalankan server

```
npm run dev
```

---

## Endpoint

### 1. Gacha

POST `/api/gacha`

Body:

```
{
  "user": "Paulus"
}
```

Contoh response:

```
{
  "message": "Tidak mendapatkan hadiah"
}
```

atau:

```
{
  "message": "Selamat! Kamu mendapatkan hadiah"
}
```

---

### 2. History

GET `/api/history?user=Paulus`

Digunakan untuk melihat riwayat gacha dari user tertentu.

---

### 3. Rewards

GET `/api/rewards`

Digunakan untuk melihat daftar reward beserta sisa kuota yang tersedia.

---

### 4. Winners

GET `/api/winners`

Digunakan untuk melihat user yang berhasil mendapatkan hadiah (nama disensor).

---

## Aturan

- User hanya bisa melakukan gacha maksimal 5x per hari
- Setiap reward memiliki kuota
- Jika kuota reward habis, reward tidak bisa didapatkan
- Jika tidak mendapatkan hadiah, maka akan muncul pesan "Tidak mendapatkan hadiah"

---

## Catatan

- Jika response kosong, berarti belum ada data di database
- Perlu melakukan gacha beberapa kali untuk melihat data pada history atau winners

---

## Author

Paulus
