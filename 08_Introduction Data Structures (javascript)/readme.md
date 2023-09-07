# Summary

1. Poin 1
tujuan belajar data structures adalah kita sebagai developer dapat mengerti kualitas dan efisiensi kode yang dibuat, dengan begitu code yang kita buat tidak hanya sekedar siap saja tetapi bisa digunakan oleh orang lain dan mudah untuk di maintenance suatu saat nantinya.

data adalah cakupan lias merujuk semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dll). data structure adalah bagaimana cara menyimpan dan mengorganisir data, value atau elemen di dalam memori komputer.

basic data structures ada 2 yaitu:
- array adalah suatu variabel yang dapat menyimpan banyak data, dimana data yang disimpan dapat bermacam-macam tipe data dan index array selalu dimulai dari 0. array memiliki beberapa method yang sering digunakan seperti push, map, filter, find dan lain-lainnya.

2. Poin 2
Operasi Data Structure terbagi atas 4 yaitu:
- insert: operasi menyimpan data pada array. efisiensi insert tergantung dengan cara kita menyimpan nilai ke dalam array. memasukkan nilai pada akhir dari array hannya membutuhkan 1 step aja. sedangkan memasukkan value baru ke awal atau tengah array membutuhkan beberapa steps lagi karena perlu menggeser data yang sudah ada sebelumnya pada array.
- read: operasi membaca nilai yang tersimpan pada indeks tertentu dalam array. read merupakan operasi yang efisien dan tercepat karena hanya membutuhkan 1 steps. ketika membaca sebuah value pada indeks tertentu memori komputer dapat langsung melompat ke indeks tersebut karena:
 1. komputer bisa melompat ke alamat memori manapun dalam satu steps.
 2. ketika mengalokasikan sebuah array, komputer juga membuat catatan dimana alamat memori array dimulai.
- search: operasi mencari apakah nilai tertentu ada didalam array atau tidak. searching adalah kebalikan dari reading, ketika melakukan operasi seaching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu. komputer tidak bisa tahu begitu saja nilai apa yang tersimpan pada setiap memori. komputer perlu memeriksa setiap cell satu per satu. search dianggap kurang efisien dibanding dengan reading karena harus memeriksa satu per satu cell sehingga hal itu membutuhkan banyak steps.
- delete: operasi menghilangkan nilai pada indeks tertentu dari suatu array. delete membutuhkan beberapa N steps untuk menghilangkan suatu nilai.
beberapa cara menghapus element pada sebuah array seperti menggunakkan pop, shift, splice, filter, membuat method sendiri dan lain-lainnya.

3. Poin 3
- set adalah variabel yang dapat menyimpan banyak data seperti array, tetapi data yang disimpan didalam set tidak ada yang duplikat. ada pun beberapa method pada set seperti has, size, entries, foreach, keys, add dan lain-lainnya. dari keempat operasi reading, searching, insertion dan deletion pada set terdapat perbedaan efisiensi pada operasi insertion. sedangkan untuk operasi lainnya sama seperti array.
Operais pada set:
- reading: dapat menggunakan foreach
- searching: dapat menggunakan method has
- deletion: dapat menggunakan method delete
- insertion: dapat menggunakan method add

kesimpulan materi:
- menganalisa jumlah steps adalah hak yang penting untuk mengetahui performa dari sebuah data structure di suatu aplikasi.
- reading, searchind dan deletion pada array dan set memiliki efisiensi yang sama yaitu berurutan 1 steps, N stepps dan Nsteps. terdapat perbedaan pada operasi insertion, dimana skenario terbaik pada array yaitu 1 steps sedangkan pada set yaitu N+1 steps.
