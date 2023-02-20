import {CardModule} from 'primeng/card';



export default function ArtistCard() {

    return (

        <p-card>
        <ng-template pTemplate="header">
            Header content here
        </ng-template>
        Body Content
        <ng-template pTemplate="footer">
            Footer content here
        </ng-template>
    </p-card>

    )
}
