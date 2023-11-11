const dateMixin = {
    data: () => ({
        date: {
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        }
    }),
    computed:{
        lastDate(){
            if(this.date !== null){
                let last = new Date(this.date.year, this.date.month + 1, 0);
                return last.getDate()

            }
            return ""
        },
        firstDateFormated(){
            if(this.date !== null) {
                let date = `${this.date.year}-${this.date.month+1}-01`
                return date

            }
            return ""
        },
        lastDateFormated(){
            if(this.date !== null) {
                let date = `${this.date.year}-${this.date.month+1}-${this.lastDate}`
                return date
            }
            return ""
        },


    },
    methods: {
        setToday() {
            return {
                month: new Date().getMonth(),
                year: new Date().getFullYear()
            }
    
        },
    }
}

export default dateMixin