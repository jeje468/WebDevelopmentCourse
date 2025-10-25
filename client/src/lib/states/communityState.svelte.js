import {browser} from '$app/environment';
import * as communitiesApi from "$lib/apis/communitiesApi";

let communityState = $state([]);

const initCommunities = async () => {
    if (browser) {
        communityState = await communitiesApi.readCommunities();
    }
}

const initCommunity = async (id) => {
  if (browser) {
    const community = await communitiesApi.readCommunity(id);
    if (community && !communityState.find((c) => c.id === community.id)) {
      communityState.push(community);
    }
  }
};

const useCommunityState = () => {
    return{
        get communities() {
            return communityState;
        },
        addCommunity: async (community) => {
            const newCommunity = await communitiesApi.createCommunity(community);
            communityState.push(newCommunity);
        },
        removeCommunity: async (community) => {
            const removed = await communitiesApi.deleteCommunity(community.id);
            communityState = communityState.filter((c) => c.id !== removed.id);
        },
    };
};

export { initCommunities, initCommunity,useCommunityState };