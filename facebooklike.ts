export class LikeButton {
    static count: number = 0;
    private state: boolean = false;
    clickButton() {
        if (this.state == false) {
            this.state = true;
            LikeButton.count++;
        }
        else {
            this.state = false;
            LikeButton.count--;
        }
        console.log(this.state);
    }
    get Count() {
        return LikeButton.count;
    }
    get Liked() {
        return this.state;
    }
}