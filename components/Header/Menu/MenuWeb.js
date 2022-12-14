import { Container, Menu, Icon, Grid, Label } from "semantic-ui-react"
import Link from "next/link"


export default function MenuWeb(){
    return (

    <div className="menu">
        <Container>
            <Grid>
                <Grid.Column className="menu__left" width={6}>
                    <MenuPlatforms/>
                </Grid.Column>
                <Grid.Column className="menu__right" width={6}>
                    <h2>Menu Estudiante</h2>
                </Grid.Column>
            </Grid>
        </Container>

    </div>
    )
}
function MenuPlatforms(){
    return(
        <Menu>
            <Menu.Item>
                PlayStation
            </Menu.Item>
        </Menu>
    )
}