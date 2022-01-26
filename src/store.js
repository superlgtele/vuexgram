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
          content: "꾸준히 공부를 하다보면 좋은 날이 올거에요^^",
          filter: "hudson",
        },
        {
          name: "John Doe",
          userImage: "https://placeimg.com/200/200/people",
          postImage: "https://placeimg.com/640/480/people",
          likes: 20,
          date: "Apr 20",
          liked: false,
          content: "흔한 자랑스타그램",
          filter: "lofi",
        },
        {
          name: "Minny",
          userImage: "https://placeimg.com/100/100/animals",
          postImage: "https://placeimg.com/640/480/animals",
          likes: 49,
          date: "Apr 4",
          liked: false,
          content: "귀여운 동물사진 구경하세요!",
          filter: "willow",
        },
      ],
      step: 0,
      publishBoard: {
        name: "Honggi",
        userImage: "https://placeimg.com/100/100/people",
        postImage: "",
        likes: 501,
        date: "May 3",
        liked: false,
        content: "",
        filter: "",
      },
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
    publish(state, payload) {
      state.publishBoard.content = payload;
    },
    fire(state, payload) {
      state.publishBoard.filter = payload;
    },
    finalPublish(state, payload) {
      state.publishBoard.postImage = payload;
      state.instadata.unshift(state.publishBoard);
      state.step = 0;
    },
    likeUp(state, payload) {
      if (state.instadata[payload].liked == false) {
        state.instadata[payload].likes++;
        state.instadata[payload].liked = true;
      } else {
        state.instadata[payload].likes--;
        state.instadata[payload].liked = false;
      }
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
