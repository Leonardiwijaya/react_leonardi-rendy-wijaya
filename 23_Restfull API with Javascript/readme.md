# Summary

1) Axios adalah sebuah library JavaScript yang umum digunakan untuk melakukan HTTP requests dari browser atau Node.js. Axios mendukung berbagai jenis HTTP methods yang dapat digunakan sesuai dengan kebutuhan kita. Berikut adalah beberapa HTTP methods yang dapat digunakan dengan Axios:
1. GET: Menggunakan HTTP GET method untuk mengambil data dari server.
2. POST: Menggunakan HTTP POST method untuk mengirim data ke server.
3. PUT: Menggunakan HTTP PUT method untuk mengirim data ke server untuk mengganti atau memperbarui sumber daya.
4. DELETE: Menggunakan HTTP DELETE method untuk menghapus sumber daya dari server.
5. PATCH: Menggunakan HTTP PATCH method untuk memperbarui sebagian dari sumber daya di server.

2) MockAPI adalah layanan yang memungkinkan kita membuat API palsu atau simulasi dengan mudah. Ini memiliki berbagai manfaat, terutama dalam pengembangan perangkat lunak dan pengujian. Beberapa manfaat utama dari menggunakan MockAPI adalah:
1. Pengembangan Independen: kita dapat mulai mengembangkan frontend dan backend secara independen. Frontend tim dapat menggunakan MockAPI untuk mengembangkan antarmuka pengguna tanpa harus menunggu backend yang sebenarnya.
2. Pengujian: kita dapat menggunakan MockAPI untuk menguji aplikasi kita dengan data palsu sebelum backend yang sebenarnya siap. Ini memungkinkan kita untuk mengidentifikasi dan memperbaiki masalah sebelum integrasi dengan backend yang sebenarnya.
3. Prototyping: MockAPI memungkinkan kita dengan cepat membuat prototipe dan mockup dari aplikasi kita tanpa harus memiliki backend yang sebenarnya. Ini adalah cara yang baik untuk mendapatkan umpan balik awal dari pemangku kepentingan.
4. Simulasi Kesalahan: kita dapat menggunakan MockAPI untuk mensimulasikan berbagai skenario kesalahan, seperti respon error atau lambat, sehingga kita dapat menguji bagaimana aplikasi kita menangani situasi-situasi tersebut.
5. Pelatihan: MockAPI dapat digunakan untuk pelatihan tim pengembangan atau pengujian dalam penggunaan API tanpa merusak data nyata di lingkungan produksi.
6. Pemahaman API: MockAPI dapat membantu pengembang dan tim pengujian untuk memahami bagaimana API yang sebenarnya akan digunakan, sehingga mereka dapat merencanakan implementasi frontend atau skenario pengujian dengan lebih baik.

2) Langkah-langkah penggunaan mockApi:
1. kunjungi website mockApi dan lakukan login
2. buat project baru dan resource baru (table)
3. tentukan nama kolom dan tipe data, pilih faker.js jika ingin ingin data terisi random dan pilih tipe data yang akan diisi random.
4. lakukan generate dummy data untuk memudahkan saat ingin melakukan testing
5. gunakan API mockApi yang telah didapatkan pada axios dan jangan lupa tentukan endpointnya.