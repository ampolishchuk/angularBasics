import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Dynamic title'
    inputValue = 'hello'

    // number = 42
    // arr = [1, 2, 3]
    // obj = {
    //     a: 1,
    //     b: { c: 2 },
    // }
    // img =
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'

    constructor() {
        // setTimeout(() => {
        //     this.img =
        //         'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYky2AADHMxkAk13BeJtkN12Zy7cSblpTa0Q&usqp=CAU'
        // }, 5000)
    }

    onInput(event: KeyboardEvent) {
        // tslint:disable-next-line:no-console
        console.log('Event', event)
        this.inputValue = (event.target as HTMLInputElement).value
    }

    onClick() {
        // tslint:disable-next-line:no-console
        console.log('Click')
    }

    onBlur(str: string) {
        this.inputValue = str
    }
}
