# Summary

1. Form merupakan salah satu hal krusial daalam pengembangan aplikasi website. form dapat digunakan untuk menghandle inputan dari user. macam-macam form yang sering digunakan seperti input, textarea, select, radio button, checkbox dan masih banyak lagi. tujuan validasi pada form yaitu
- mencari input data yang benar dan sesuai format. sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi.
- melindungi akun pengguna. misalnya membuat pengguna untuk memasukkan data password yang aman.
- melindungi sistem/aplikasi. validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.

2. Controlled component adalah komponen react yang menghandle masukkan form dimana nilainya dari inputan akan dihandle oleh react dengan tujuan untuk menvalidasi, menyimpan atau memperbarui state. 
Uncontroller component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri untuk menulis uncontrolled compoent, kita daapat menggunakan ref untuk mendapatkan nilai form dari dom tanpa harus menulis event handler. pada uncontrolled component kita dapat menginisialisasi nilai dari sebuah inputan dengan menggunakkan atribut defaultValue. Dalam react, tag file input merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna bukan oleh kode program.

3. perbedaan uncontrolled dan controlled component
- uncontrolled tidak dapat melakukan validasi field secara langsung karena validasi uncontrolled terjadi saat submit saja sedangkan controlled dapat melakukan validasi secara instan atau langsung karena menggunakkan event handling.
- uncontrolled tidak dapat mendisable button saat kondisi tertentu sedangkan controlled dapat melakukannya

persamaan uncontrolled dan controlled component
- nilai diambil sekali saat melakukan submit
- validasi data terjadi saat submit
