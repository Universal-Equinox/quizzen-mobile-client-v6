import React from 'react'
import {
    HStack,
    Badge,
    BadgeText,
} from "@gluestack-ui/themed";
import { PostTagsType } from '../../types/PostType';



interface PostBadgesProp {
    tags: PostTagsType
}

const PostBadges: React.FC<PostBadgesProp> = ({ tags }) => {
    return (
        <>
            <HStack space="xs">
                <Badge
                    size="sm"
                    variant="outline"
                    borderRadius="$xl"
                    action="warning"
                >
                    <BadgeText>#{tags?.exam}</BadgeText>
                </Badge>

                <Badge size="sm" variant="outline" borderRadius="$xl" action="info">
                    <BadgeText>#{tags?.subject}</BadgeText>
                </Badge>
                <Badge
                    size="sm"
                    variant="outline"
                    borderRadius="$xl"
                    action="success"
                >
                    <BadgeText>#{tags?.topic}</BadgeText>
                </Badge>
            </HStack>
        </>
    )
}

export default PostBadges