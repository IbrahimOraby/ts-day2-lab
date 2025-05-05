var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class PostService {
    fetchPosts(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield fetch(url);
            let posts = yield data.json();
            posts.map((post) => {
                console.log(`User Id: ${post.userId}, Post Id: ${post.id}, Title: ${post.title}, Body: ${post.body}`);
            });
        });
    }
}
