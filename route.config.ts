import {Routes} from '@angular/router';
import {users} from './component/users.component';
import {albums} from './component/albums.component';
import {photos} from './component/photos.component';



export const myRoute:Routes=[
    {path:'', component:users},
    {path:'users', component:users},
    {path:'albums', component:albums},
    {path:'photos', component:photos}
   
]
