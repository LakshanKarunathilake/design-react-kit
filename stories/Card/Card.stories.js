import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    CardImgOverlay,
    CardHeader,
    CardFooter,
    CardGroup,
    CardDeck,
    CardColumns,
    Button,
    ListGroup,
    ListGroupItem,
    Nav,
    NavLink
} from "../../src";

import Esempi from "./Esempi.md";
import Contenuti from "./Contenuti.md";
import Immagini from "./Immagini.md";
import HeaderFooter from "./HeaderFooter.md";
import Elenchi from "./Elenchi.md";
import NavBar from "./NavBar.md";
import Gruppi from "./Gruppi.md";
import Deck from "./Deck.md";
import Colonne from "./Colonne.md";

const stories = storiesOf("Componenti/Card", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <Card className="w-50">
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo esempio Card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <Button color="primary">Vai avanti</Button>
        </CardBody>
    </Card>
);
stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTablesExclude: [Button]
        })(EsempiComponent)
    )
);

const ContenutiComponent = () => (
    <div>
        <h4>Card con solo Body</h4>
        <Card className="w-50">
            <CardBody>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardText>
            </CardBody>
        </Card>
        <hr />
        <h4>Card con Titolo e Body</h4>
        <Card className="w-50">
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardText>
            </CardBody>
        </Card>
        <hr />
        <h4>Card con Titolo, Sottotitolo, Body e Link</h4>
        <Card className="w-50">
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardSubtitle>Sottotitolo card</CardSubtitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Altro Link</CardLink>
            </CardBody>
        </Card>
    </div>
);
stories.add("Contenuti", withDocs(Contenuti, withInfo()(ContenutiComponent)));

const ImmaginiComponent = () => (
    <div>
        <Card className="w-50">
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardText>
            </CardBody>
        </Card>

        <Card inverse className="w-50 mt-5">
            <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Immagine"
            />
            <CardImgOverlay>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </CardText>
                <CardText>
                    <small className="text-muted">
                        Ultimo aggiornamento 3 minuti fa
                    </small>
                </CardText>
            </CardImgOverlay>
        </Card>
    </div>
);
stories.add("Immagini", withDocs(Immagini, withInfo()(ImmaginiComponent)));

const HeaderFooterComponent = () => (
    <Card className="w-50 mt-5">
        <CardHeader>Featured</CardHeader>
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CardText>
            <Button>Vai avanti</Button>
        </CardBody>
        <CardFooter className="text-center">2 giorni fa</CardFooter>
    </Card>
);
stories.add(
    "Header e Footer",
    withDocs(
        HeaderFooter,
        withInfo({
            propTablesExclude: [Button]
        })(HeaderFooterComponent)
    )
);

const ElenchiComponent = () => (
    <Card className="w-50">
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
        </CardBody>
        <ListGroup flush>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
    </Card>
);
stories.add("Elenchi", withDocs(Elenchi, withInfo()(ElenchiComponent)));

const NavBarComponent = () => (
    <div>
        <h4>Card con Menù a tab</h4>
        <Card>
            <CardHeader>
                <Nav tabs card>
                    <NavLink active href="#">
                        Link Attivo
                    </NavLink>
                    <NavLink href="#">Link</NavLink>
                    <NavLink disabled href="#">
                        Link Disabilitato
                    </NavLink>
                </Nav>
            </CardHeader>
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
            </CardBody>
        </Card>
        <h4 className="mt-5">Card con Menù a bottoni</h4>
        <Card>
            <CardHeader>
                <Nav pills card>
                    <NavLink active href="#">
                        Link Attivo
                    </NavLink>
                    <NavLink href="#">Link</NavLink>
                    <NavLink disabled href="#">
                        Link Disabilitato
                    </NavLink>
                </Nav>
            </CardHeader>
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
            </CardBody>
        </Card>
    </div>
);
stories.add("Menù", withDocs(NavBar, withInfo()(NavBarComponent)));

const GruppiComponent = () => (
    <CardGroup>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
                <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
            </CardBody>
        </Card>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
                <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
            </CardBody>
        </Card>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
                <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
            </CardBody>
        </Card>
    </CardGroup>
);
stories.add("Gruppi", withDocs(Gruppi, withInfo()(GruppiComponent)));

const DeckComponent = () => (
    <CardDeck>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
                <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
            </CardBody>
        </Card>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
                <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
            </CardBody>
        </Card>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
                <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
            </CardBody>
        </Card>
    </CardDeck>
);
stories.add("Deck", withDocs(Deck, withInfo()(DeckComponent)));

const ColonneComponent = () => (
    <CardColumns>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardSubtitle>Sottotitolo card</CardSubtitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
            </CardBody>
        </Card>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
            <CardBody>
                <CardTitle>Titolo card</CardTitle>
                <CardSubtitle>Sottotitolo card</CardSubtitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
            </CardBody>
        </Card>
        <Card body inverse color="primary">
            <CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
            </CardTitle>
        </Card>
        <Card>
            <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Immagine"
            />
        </Card>
        <Card>
            <CardBody>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </CardText>
            </CardBody>
        </Card>
        <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
            <CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
            </CardTitle>
        </Card>
    </CardColumns>
);
stories.add("Colonne", withDocs(Colonne, withInfo()(ColonneComponent)));
