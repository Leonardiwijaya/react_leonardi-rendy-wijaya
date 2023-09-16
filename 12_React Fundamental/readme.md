# Summary

1. Poin 1
JSX merupakan singkatan dari JavaScript Syntax Extension atau dikenal juga dengan Javascript XML. dengan menggunakan jsx maka akan memudahkan penulisan pada react dibandingkan menggunakan React.createElemnet. saat menggunakan JSX, kita harus menggunakkan huruf lowercase untuk komponen bawaan react dan huruf Camelcase untuk komponen yang kita buat. menentukan attribut dengan jsx dapat dilakukan dengan tanda kutip untuk menentukan string literal dan kurung kurawal untuk menyematkan ekspresi javascript.

2. Poin 2
Komponen react adalah bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavior dan state sebagian UI. pada sebuah element html dapat dibagi menjadi beberapa komponen seperti contohnya pada element form dapat dibagi menjadi beberapa komponen seperti input, button, form dan lain-lainnya. 

3. Poin 3
props atau singkatan dari properties, membuat ktia memberikan argumen atau data pada component. props membantu untuk membuat komponen menjadi lebih dinamis. props pada component adalah read-only dan tidak dapat diubah. props adalah one way data flow, dimana artinya data cuma dapat diturunkan dari parent ke childnya saja dan tidak dapat sebaliknya.

Lifecycle pada react:
1. render:
- di panggil pada pertama kali atau setiap ada perubahan nilai
- fungsi yang paling sering dipakai
- required pada class component
- tidak boleh ada setState pada pure function
2. componentDidMount:
- dipanggil ketika component sudah di render untuk pertama kali
- tempat yang tepat untuk pemanggilan API
- boleh ada setstate()
3. componentDidUpdate:
- dipanggil ketika terjadi update (props atau state)
4. ComponentWillUnmount:
- dipanggil ketika component akan dihancurkan
- cocok untuk clean up actions
pada react dapat menggunakkan conditional untuk menrender pada kondisi tertentu yaitu menggunakkan if, inline if dengan operator && dan inline if else (ternary).
