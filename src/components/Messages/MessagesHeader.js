import { Component } from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessagesHeader extends Component {
    render() {
        const { channelName, numUniqueUsers, handleSearchChange, searchLoading, isPrivateChannel } = this.props
        return (
            <Segment clearing>
                {/* Channel Title */}
                <Header fluid='true' as='h2' floated='left' style={{ marginBottom: 0 }}>
                    <span>
                        {channelName}
                        <Icon color='black' />
                    </span>
                    <Header.Subheader>{numUniqueUsers}</Header.Subheader>
                </Header>
                {/* Channel search input */}
                <Header floated='right'>
                    <Input loading={searchLoading} onChange={handleSearchChange} size='mini' icon='search' name='searchTerm' placeholder='Search Messages/User' />
                </Header>
            </Segment>
        )
    }
}
export default MessagesHeader