import http from "./httpService";

const API_ENDPOINT = "http://127.0.0.1:5000/";

export default function getReviewResult(review) {
    return http.post(API_ENDPOINT, { review });
}