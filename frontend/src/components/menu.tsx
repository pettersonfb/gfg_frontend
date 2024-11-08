import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import '../styles/menu.css'

interface ExtendedMenuItem extends MenuItem {
    badge?: number;
    shortcut?: string;
    label?: string;
    items?: ExtendedMenuItem[];
}

export default function Menu() {
    const itemRenderer = (item: ExtendedMenuItem) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    
    const items: ExtendedMenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'News',
            icon: 'pi pi-star',
         
        },
        {
            label: 'Sales',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Steam',
                    icon: 'pi pi-bolt',
                    template: itemRenderer
                }  as ExtendedMenuItem,
                {
                    label: 'Nuuvem',
                    icon: 'pi pi-server',
                    template: itemRenderer
                }  as ExtendedMenuItem,
                {
                    label: 'Epic',
                    icon: 'pi pi-pencil',
                    template: itemRenderer
                }  as ExtendedMenuItem,
                {
                    separator: true
                }
            ]
        },
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar className='userAvatar' image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}