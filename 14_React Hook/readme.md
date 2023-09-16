# Summary

1. React Hooks
Hooks merupajan fitur baru di react 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas. Hooks hanya di panggil di tingkas atas dan jangan memanggil hooks dari dalam loops, conditions atau nested functions atau dari fungsi-fungsi javascript biasa. kita dapat memanggil hooks dari komponen-komponen fungsi react dan custom hooks.

Hooks dasar:
- useState
- useEffect
- useContext
Hooks Tambahan:
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

2. useEffect
- effect hook memungkinkan kita melakukan efek samping(side effects) di dalam function component.
- componentDidMount, componentDidUpdate dan componentWillUnmount = useEffect.
- ada dua jenis: Butuh pembersihan dan tidak butuh pembersihan

pada useEffect terdapat dua parameter yaitu effect function yang berisikan perintah yang akan dijalankan dan dependencies yang berisikan nilai, dimana nilai ini yang akan menentukan ketika nilai tidak mengalami perubahan maka tidak akan terjadi render sedangkan jika terjadi perubahan pada nilai maka useEffect akan dijalankan. dependecies juga bersifat opsional tetapi jika dependecies kosong maka useEffect akan dipanggil setiap kali ada perubahan. oleh karena itu untuk mencegahnya maka perlu menambah kurung awal ([]) pada dependencies sehingga useEffect hanya akan dijalankan sekali saja.

3. useState
React hooks useState di gunakan untuk membuat state di function komponen. nilai default pada useState dapat di inisialisasikan saat mendeklarasikan variable dan useState. index kedua pada useState yang biasanya diawali kata set digunakan untuk melakukan perubahan nilai pada variable useState.
contoh useState:
const [name, setName] = useState();