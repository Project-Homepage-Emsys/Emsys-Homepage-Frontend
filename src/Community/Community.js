import BannerCommunity from './BannerCommunity';
import BoardCommunity from './MainCommunity';
import { CategoryCommunity } from './MainCommunity';

function Community() {
    return (
        <div>
            <BannerCommunity></BannerCommunity>
            <CategoryCommunity></CategoryCommunity>
            <BoardCommunity></BoardCommunity>
        </div>
    )
}

export default Community;