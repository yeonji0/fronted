import axios from "axios";

axios.get('/board/list', {
    params: {

    }
}).then(response => {
    this.boardData = response.data;
}).catch(error => {
    console.error("Error fetching data: ", error);
});