# Summary:
1. version control adalah sistem untuk melacak dan mengelola setiap perubahan pada file / source code program sehingga membantu developer dalam mengelola file / source code program. version controlnya biasanya digunakan untuk membandingkan perubahan yang terjadi saat ini dan sebelumnya pada file / source code program saat terjadi kesalahan.
Sejarah version control system:
    1.single user: sistem version control pertama yang diciptkan, dimana sistem tersebut cuma terpusat pada satu user saja dan file / source code program masih tersimpan secara lokal.
    2.Centralized: pengembangan lanjutan dari sistem version control single user, dimana sistem dapat dikelola oleh beberapa user melalui local server. tetapi kelemahan centralized adalah ketika local server mati atau down maka user tidak dapat melakukan apa-apa karena file / source code tidak tersimpan di local komputer melainkan local server.
    3.Distributed: pengembangan lanjutan dari sistem version control centralized, dimana file / source code tersimpan di local komputer dan server. pada distributed pengelolaan file bersama tim menjadi lebih mudah karena telah terhubung ke internet.
    adapun beberapa version control yang terkenal seperti git, bazaar, mercurial dan lain-lainnya

2. git adalah software berbasis Version Control System (VCS). git dirancang untuk mengelola perubahan pada file atau source code sehingga memudahkan tim untuk berkolaborasi dalam pengembangan dan melacak perubahan kode yang dilakukan antar team.

GitHub adalah platform hosting repositori Git yang populer di kalangan pengembang perangkat lunak. GitHub menyediakan infrastruktur yang kuat untuk berbagi, berkolaborasi, dan mengelola proyek perangkat lunak dengan mudah.

3. beberapa perintah git yang digunakan:
- git init: untuk inisalisasi
- git remote add: untuk menentukan repository
- git push: untuk mengupload atau mengirimkan perubahan file yang telah di commit ke repository
- git clone: untuk melakukan cloning project yang sudah ada
- git add: untuk menyimpan perubahan atau file baru pada staging directory
- git add dapat dilakukan dengan 2 cara yaitu:  
    1.git add .: untuk menyimpan semua perubahan atau file baru pada staging directory.
    2.git add <nama file> untuk menyimpan perubahan atau file baru tertentu saja.
- git commit: mennyimpan perubahan ke dalam repository pada komputer lokal.
- git commit -m <nama pesan>: menambahkan pesan saat melakukan commit.
- git diff: untuk melihat perbedaan pada file atau baris code yang di ubah.
- git branch <nama branch>: untuk membuat branch baru.
- git checkout: untuk berpindah branch.
git branch dan checkout memiliki beberapa parameternya masing-masing dengan fungsi tertentu.
- git stash: untuk menyimpan perubahan working directory pada branch, biasanya digunakan ketika terdapat file pada working directory ketika ingin berpindah branch.
- git stash apply: untuk menampilkan kembali file yang telah disimpan pada branch.
- .gitignore: untuk mengabaikan file sehingga tidak ikuk terkirim ke repository biasanya digunakan untuk library.
- git fetch: untuk menampilkan perubahan branch terbaru.
- git pull: untuk untuk menyatukan kode dari repository pada branch tertentu ke local repository.


 Hasil Latihan dan Eksplorasi git di folder Screenshots