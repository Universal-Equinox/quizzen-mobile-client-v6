import React from 'react'
import {
    HStack,
    Badge,
    BadgeText,
} from "@gluestack-ui/themed";

const PostBadges = () => {
    return (
        <>
            <HStack space="xs">
                <Badge
                    size="sm"
                    variant="outline"
                    borderRadius="$xl"
                    action="warning"
                >
                    <BadgeText>#KPSS</BadgeText>
                </Badge>

                <Badge size="sm" variant="outline" borderRadius="$xl" action="info">
                    <BadgeText>#Genel-yetenek</BadgeText>
                </Badge>
                <Badge
                    size="sm"
                    variant="outline"
                    borderRadius="$xl"
                    action="success"
                >
                    <BadgeText>#cografya</BadgeText>
                </Badge>
            </HStack>
        </>
    )
}

export default PostBadges