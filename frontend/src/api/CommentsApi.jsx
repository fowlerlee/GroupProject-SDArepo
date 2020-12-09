import Api from "./Api";

class CommentsApi {
    getAllComments() {
        return Api.get('/comments');
    }

    getCommentById(id) {
        return Api.get('/comments/'+id);
    }

    createComment(commentData) {
        return Api.post('/comments', commentData);
    }

    deleteComment(id) {
        return Api.delete('/comments/'+id);
    } 
}

export default new CommentsApi();