# Summary

1. Redux adalah library react yang digunakan untuk mengelola state aplikasi web secara efisien. Redux membantu mengatasi masalah kompleksitas pengelolaan state di aplikasi React yang besar dan kompleks. Komponen penting di redux:
- Store adalah objek sentral yang menyimpan seluruh state aplikasi. state ini dapat diakses dari berbagai komponen di react.
- Reducer adalah pure javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru.
- Action adalah objek yang menggambarkan tindakan yang dilakukan oleh pengguna atau oleh aplikasi itu sendiri. Actions ini akan dikirimkan ke store melalui dispatcher untuk memicu perubahan state. Sebuah action biasanya memiliki dua properti penting: type (tipe tindakan) dan payload (data yang terkait dengan tindakan tersebut).
Redux libraries dan tools
- React Redux
- React Roolkit
- React DevTools Extension

2. Saat yang tepat untuk menggunakan redux:
- banyak state yang perlu ditaruh di banyak tempat
- state pada app sering berubah
- login untuk mengubah state kompleks
- redux cocok digunakan untuk projek ukuran sedang/besar dan dikerjakaan oleh banyak orang.
- perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu.

3. thunk middleware adalah fitur redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. thunk diperlukan untuk menghandle side effect logic yang kompleks dan untuk logic async  seperti request data. persisted state adalah fungsi untuk menyimpan state pada local storage sehingga state yang telah disimpan tidak akan menghilang apabila web di refresh.