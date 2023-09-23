# Summary

1. Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasu pada SPA(Single Page Application). Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. pada react router terdapat link dan redirect, dimana keduanya memiliki kemiripan yang sama tetapi terdapat perbedaan diantara keduanya yaitu
Link
- Dapat digunakan pada kondisi apapun
- Memberikan history baru pada browser
- Bereaksi dengan click sepert a href

Redirect
- Lebih sering digunakan pada halaman 404
- menimpa history pada browser
- Bereaksi dengan suatu kondisi

2. Multi Page Application (MPA) juga disebut dengan tradisional web adalah jenis aplikasi website dimana perlu menrender ulang seluruh halaman web setiap kali membuat permintaan baru.
Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut. halaman pada single page tidak akan di refresh atau di reload ulang karena pada single page cuma merender ulang beberapa komponene tertentu saja.

3. Beberapa fungsi pada react router:
- BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML 5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang
- Route digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web. attribute path merupakan url pada browser pada proses routing.
attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan.

- Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju

