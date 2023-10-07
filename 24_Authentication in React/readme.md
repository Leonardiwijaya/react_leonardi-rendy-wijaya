# Summary

1) Authentication adalah proses verifikasi identitas pengguna atau entitas (seperti perangkat atau aplikasi) yang mencoba mengakses sistem atau layanan. Tujuannya adalah untuk memastikan bahwa pengguna atau entitas tersebut adalah yang mereka klaim.
Autentikasi biasanya dilakukan melalui penggunaan kombinasi faktor seperti:
- Username dan Password: Ini adalah metode autentikasi yang paling umum, di mana pengguna harus memasukkan kombinasi yang benar dari nama pengguna dan kata sandi.
- Token: Ini bisa berupa token fisik (seperti token OTP) atau token digital yang digenerate oleh aplikasi atau perangkat.

2) Authorization  adalah proses yang terjadi setelah autentikasi dan berfokus pada hak akses yang diberikan kepada pengguna atau entitas setelah identitas mereka diverifikasi. Ini menentukan apa yang dapat dilakukan oleh pengguna atau entitas setelah mereka berhasil masuk ke dalam sistem. Otorisasi dapat mencakup aspek-aspek seperti:
- Peran dan Izin: Pengguna diberikan peran tertentu (seperti pengguna biasa atau administrator) dan izin akses yang sesuai dengan peran mereka. Izin ini mendefinisikan tindakan apa yang dapat mereka lakukan, seperti membaca, menulis, atau menghapus data.
- Kebijakan Akses: Otorisasi sering kali didasarkan pada kebijakan akses yang ditetapkan oleh administrator atau pemilik sumber daya. Kebijakan ini mengatur aturan-aturan yang mengontrol akses ke sumber daya.

3) cara kerja authentication dan authorization: ketika user mengakses suatu API, maka akan terjadi pengecekan terhadap user, apakah user tersebut telah login atau belum, jika user belum melakukan login, maka user harus melakukan login terlebih dahulu dan jika user sudah melakukan login sebelumnya, maka akan dilakukan pengecekan apakah token sudah expired atau belum. user yang telah login dan memiliki token yang valid dapat mengakses API tertentu berdasarkan autorisasi yang dimiliki oleh user.
