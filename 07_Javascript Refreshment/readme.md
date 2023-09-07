# Summary:

1. Poin 1
Pada Javascript terdapat 3 deklarasi variable yaitu var, let dan const. ketiga variable memang digunakan untuk menyimpan value tetapi terdapat beberapa perbedaan di antara ketiga variable tersebut:
- var dan let dapat di assign berulang kali sedangkan const hanya dapat dapat di assign saat di deklarasi.
- let dan const tidak dapat di deklarasi ulang sedangkan var dapat dideklarasi berulang kali.
- let dan const merupakan block scope sedangkan var tidak.
- var dapat menerapkan hoisting sedangkan let dan const tidak.

pada javascript terdapat dua tipe data yaitu:
- primitive adalah tipe data yang meneruskan nilai, primitive akan dianggap sama dengan data lain jika memiliki nilai yang sama. contoh tipe data primitive adalah string, number, boolean, null, undefined dan symbol.
- non primitive adalah tipe data yang meneruskan reference, non primtive tidak akan dianggap sama walaupun memiliki nilai yang sama dan hanya akan dianggap sama jika memiliki refenereces yang sama. contoh tipe data non primitive yaitu array dan object.

2. Poin 2
Destructuring adalah ekspresi dari javascript yang memungkinkan untuk menyalin nilai dari array atau properti dari objek, ke dalam variabel yang berbeda. contoh penggunaan sederhana destructuring pada code yaitu:
let words = [1, 2, 3];
let ['a', 'b'] = words
variable a akan berisikan 1 dan b akan berisikan 2.

Spread adalah syntax yang dapat digunakan ketika semua dari object atau array perlu dimasukkan ke dalam semacam daftar. contoh penggunaan sederhana destructuring pada code yaitu
let num1 = [1, 2];
let num2 = [3, 4, 5];
let nums = [...num1, ...num2];
variable nums akan berisikan [1,2,3,4,5]

beberapa method yang umum digunakan pada array di javascript:
- concat: untuk menggabungkan dua array atau lebih menjadi satu array yang baru. concat bersifat immutable.
- map: untuk melakukan iterasi pada array dan melakukan perubahan nilai pada array sehingga mengembalkan array baru. map bersifat immutable.
- slice: untuk memilih bagian dari array dan mengembalikan array baru. bersifat immutable.
- foreach: untuk melakukan iterasi element pada array. foreach bersifat immutable dan tidak mengembalikan apapun.
- push: untuk menambahkan data baru pada urutan belakang.
- pop: untuk menghapus data dari urutan terakhir pada array.
- unshift: untuk menambahkan data baru pada urutan depan pada array.
- shift: untuk menghapus data dari urutan depan pada array
- splice: untuk menghapus data dari index tertentu pada array:
- indexof: untuk mencari index data dari sebuah array dimana pencarian data dimulai dari depan.
- indexof: untuk mencari index data dari sebuah array dimana pencarian data dimulai dari belakang.


3. Poin 3
normal flow adalah pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan.

control flow adalah mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita dengan menggunakkan pengulangan atau pengkondisian. 

try bertugas mengeksekusi statement di dalamnya, sedangkan catch bertugas menangkap error yang terjadi pada statement di dalam try. throw terjadi di dalam block try, bertugas melemparkan error seusai kondisi yang diinginkan, error itu akan ditangkap oleh catch.

function didalam javascript adalah sebuah objek. karena memiliki properti dan juga method. function digunakan untuk melakukan serangkain komputasi / prosedur yang dapat digunakan berulang kali. ada 4 jenis function yaitu
- declaration function
- function expression
- arrow function
- anonymous function

synchronous adalah proses mengekseskusi setiap perintah satu persatu sesusai urutan kode yang dituliskan. output dari code sesuai dengan urutan, karena setiap perintah harus menunggu perintah sebelumnya selesai.

asynchronous adalah hasil eksekusi atau output yang tidak selalu berdasarkan urutan kode tetapi berdasarkan waktu proses.

callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan.

promise adalah objek yang merepresentasikan keberhasilan atau kegagaan pada sebuah event yang asynchronous dimasa mendatang.

fungsi asynchronous adalah sebuah function yang berkerja secara asynchronous yang menghasilkan promise sebagai return valuenya, tetapi cara penulisan codenya menggunakan penulisan yang synchronous (standar).

await adlah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promisenya selesai.