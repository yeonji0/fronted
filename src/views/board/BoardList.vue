<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <table class="table">
          <thead class="thead-primary">
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">번호</th>
            <th scope="col">구분</th>
            <th scope="col">제목</th>
            <th scope="col">첨부파일</th>
            <th scope="col">등록자</th>
            <th scope="col">등록일시</th>
            <th scope="col">수정자</th>
            <th scope="col">수정일시</th>
          </tr>
          </thead>
          <tbody>
          <tr class="text-center" v-for="(item, idx) in list" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ item.no }}</td>
            <td>{{ item.largeCode }}</td>
            <td>{{ item.title }}</td>
            <td>첨부파일</td>
            <td>{{ item.regUser }}</td>
            <td>{{ item.regDate }}</td>
            <td>{{ item.modUser }}</td>
            <td>{{ item.modDate }}</td>
          </tr>
          </tbody>
        </table>
        <div style="display: flex;justify-content: flex-end;margin: 5px; gap: 5px;">
          <button type="button" class="btn btn-primary">등록</button>
          <button type="submit" class="btn btn-danger">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestBody: {},
      searchParams: {
        no: '',
        title: '',
      },
      list: {},
      no: '',
    };
  },
  mounted() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      this.requestBody = {
        keyword: this.keyword,
        page: this.page,
        size: this.size
      }

      this.$axios.get(this.$serverUrl + "/board/list", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {

        this.list = res.data

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    }
  }
};
</script>
