function generousMan(n, m) {
//tao mot bien dem luot
    let count = 1;
    while (true) {
    //neu luot la le thi chu so keo cua Van
        if (count % 2 !== 0) {
            n = n - count;
            count++
        } else {
        //neu la luot chan thi tru so keo cua Viet
            m = m - count;
            count++
        }
        //kiem tra xem so keo cua ai het truoc thi tra ra ket qua
        if (n < 0) {
            return "Van"
        }
        if (m < 0) {
            return "Viet"
        }

    }
}
