import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      instadata: [
        {
          name: "Kim Hyun",
          userImage: "https://placeimg.com/100/100/arch",
          postImage: "https://placeimg.com/640/480/arch",
          likes: 36,
          date: "May 15",
          liked: false,
          content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
          filter: "perpetua",
        },
        {
          name: "John Doe",
          userImage: "https://placeimg.com/200/200/people",
          postImage: "https://placeimg.com/640/480/people",
          likes: 20,
          date: "Apr 20",
          liked: false,
          content: "흔한 자랑스타그램",
          filter: "clarendon",
        },
        {
          name: "Minny",
          userImage: "https://placeimg.com/100/100/animals",
          postImage: "https://placeimg.com/640/480/animals",
          likes: 49,
          date: "Apr 4",
          liked: false,
          content: "우리집 개는 화장실 물도 내림",
          filter: "lofi",
        },
      ],
      step: 0,
    };
  },
  mutations: {
    moreajax(state, data) {
      state.instadata.push(data);
    },
    stepup(state) {
      state.step++;
    },
    stepdown(state) {
      state.step--;
    },
  },
  actions: {
    more(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
          context.commit("moreajax", result.data);
        });
    },
  },
});

export default store;
