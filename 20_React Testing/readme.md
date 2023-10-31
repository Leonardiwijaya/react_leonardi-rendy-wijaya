# Summary

1. Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita. manfaat testing melakukan testing:
- lebih percaya diri jika ingin mengubah suatu bagian pada aplikasi kita
- mengurangi bug pada aplikasi. walaupun testing tidak menjamin aplikasi kita bebas bug.

secara ummum, cara mnegetes di react terbagi menjadi dua kategori:
1. Rendering component trees di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
2. Menjalankan aplikasi lengkap di dalam browser. ini dikenal sebgai tes end-to-end.

2. jest adalah test runner pada javascript yang memungkinkan anda mengakses DOM melalui jsdom, sementara jsdom hanyalah perkiraan cara kerja browser. jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga anda dapat memiliki kontrol lebih pada kode yang dijalankan.

react testing library merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada react tanpa bergantung pada detail implementasinya. pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita unutk menerapkan best pratices untuk aksesibilitas.

3. react testing library menawrkan berbagai fungsi untuk mendapatkan elemen. element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. kita dapat memilih elemen dengan fungsi object screen RTL. terdapat beberapa kategori testing pada RTL:
- getByLabelText
- getByPlaceholderText
- getByAltText
- getByDisplayValue


