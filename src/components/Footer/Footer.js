import React from 'react';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';


function Footer() {
    return (
        <div>
            <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
                <Container>
                    <Grid columns={3} divided stackable inverted>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='/assets/images/logo/logo-neutral.png' centered size='mini' />
                                <p>Local Travel Community</p>
                                Social media
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Group 1' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header inverted as='h4' content='Group 2' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                    <Divider inverted section />

                    <List horizontal inverted divided link size='small'>

                        <p>Copyright &copy; {new Date().getFullYear()} Malbourne Tours. All Rights Reserved.</p>

                        <p>You can pay: </p>

                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>

                </Container>
            </Segment>
        </div>
    )
}

export default Footer;