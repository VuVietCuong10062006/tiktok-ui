import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { GroupIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={routesConfig.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={routesConfig.following} icon={<GroupIcon />} />
                <MenuItem title="LIVE" to={routesConfig.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
