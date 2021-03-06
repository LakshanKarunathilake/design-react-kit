import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    DropdownToggle,
    DropdownItem,
    Button
} from "../../src";

import InputGroupDropdownExample from "./InputGroupDropdownExample";

import Esempi from "./Esempi.md";
import Dimensioni from "./Dimensioni.md";
import CheckboxRadio from "./CheckboxRadio.md";
import InputMultipli from "./InputMultipli.md";
import AggiunteMultiple from "./AggiunteMultiple.md";
import AggiuntaBottoni from "./AggiuntaBottoni.md";
import BottoniDropdown from "./BottoniDropdown.md";
import PulsantiSegmentati from "./PulsantiSegmentati.md";

const stories = storiesOf("Componenti/Input Group", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <div className="p-3">
        <InputGroup className="pb-3">
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input type="text" placeholder="Username" aria-label="Username" />
        </InputGroup>

        <InputGroup className="pb-3">
            <Input
                type="text"
                placeholder="Mail utente"
                aria-label="Mail utente"
            />
            <InputGroupAddon addonType="append">@esempio.it</InputGroupAddon>
        </InputGroup>

        <FormGroup>
            <InputGroup className="pb-3">
                <InputGroupAddon addonType="prepend">
                    https://esempio.it/utente/
                </InputGroupAddon>
                <Input type="text" id="basic-url" />
            </InputGroup>
            <Label for="basic-url">La tua URL</Label>
        </FormGroup>

        <InputGroup className="pb-3">
            <InputGroupAddon addonType="prepend">€</InputGroupAddon>
            <Input type="number" aria-label="€" />
            <InputGroupAddon addonType="append">,00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon addonType="prepend">Textarea</InputGroupAddon>
            <Input type="textarea" aria-label="Textarea" />
        </InputGroup>
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const DimensioniComponent = () => (
    <div>
        <InputGroup size="sm" className="mb-3">
            <InputGroupAddon addonType="prepend">Testo piccolo</InputGroupAddon>
            <Input type="text" aria-label="Testo piccolo" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                Testo predefinito
            </InputGroupAddon>
            <Input type="text" aria-label="Testo predefinito" />
        </InputGroup>

        <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">Testo grande</InputGroupAddon>
            <Input type="text" aria-label="Testo grande" />
        </InputGroup>
    </div>
);
stories.add(
    "Dimensioni",
    withDocs(Dimensioni, withInfo()(DimensioniComponent))
);

const CheckboxRadioComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <InputGroup>
                    <Input type="checkbox" aria-label="Addon" />
                </InputGroup>
            </InputGroupAddon>
            <Input type="text" aria-label="Addon" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroup>
                    <Input type="radio" aria-label="Addon" />
                </InputGroup>
            </InputGroupAddon>
            <Input type="text" aria-label="Addon" />
        </InputGroup>
    </div>
);
stories.add(
    "Checkbox e radio",
    withDocs(CheckboxRadio, withInfo()(CheckboxRadioComponent))
);

const InputMultipliComponent = () => (
    <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">Nominativo</InputGroupAddon>
            <Input type="text" placeholder="Nome" aria-label="Nome" />
            <Input type="text" placeholder="Cognome" aria-label="Cognome" />
        </InputGroup>
    </div>
);
stories.add(
    "Input multipli",
    withDocs(InputMultipli, withInfo()(InputMultipliComponent))
);

const AggiunteMultipleComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>€</InputGroupText>
                <InputGroupText>0,00</InputGroupText>
            </InputGroupAddon>
            <Input type="text" aria-label="€" />
        </InputGroup>

        <InputGroup>
            <Input type="text" aria-label="€" />
            <InputGroupAddon addonType="append">
                <InputGroupText>€</InputGroupText>
                <InputGroupText>0,00</InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    </div>
);
stories.add(
    "Aggiunte multiple",
    withDocs(AggiunteMultiple, withInfo()(AggiunteMultipleComponent))
);

const AggiuntaBottoniComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
            <Input type="text" placeholder="" aria-label="Bottone" />
        </InputGroup>

        <InputGroup className="input-group mb-3">
            <Input
                type="text"
                placeholder="Contenitore"
                aria-label="Contenitore"
            />
            <InputGroupAddon addonType="append">
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
        </InputGroup>

        <InputGroup className="input-group mb-3">
            <InputGroupAddon addonType="prepend">
                <Button color="primary">Bottone</Button>
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
            <Input type="text" placeholder="" aria-label="Bottone" />
        </InputGroup>

        <InputGroup className="input-group">
            <Input
                type="text"
                placeholder="Contenitore"
                aria-label="Contenitore"
            />
            <InputGroupAddon addonType="append">
                <Button color="primary">Bottone</Button>
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
        </InputGroup>
    </div>
);
stories.add(
    "Aggiunta bottoni",
    withDocs(AggiuntaBottoni, withInfo()(AggiuntaBottoniComponent))
);

stories.add(
    "Bottoni con dropdown",
    withDocs(
        BottoniDropdown,
        withInfo({
            propTables: [
                InputGroup,
                InputGroupButtonDropdown,
                DropdownToggle,
                DropdownItem
            ],
            propTablesExclude: [InputGroupDropdownExample]
        })(() => <InputGroupDropdownExample />)
    )
);

stories.add(
    "Pulsanti segmentati",
    withDocs(
        PulsantiSegmentati,
        withInfo({
            propTables: [
                InputGroup,
                InputGroupButtonDropdown,
                DropdownToggle,
                DropdownItem
            ],
            propTablesExclude: [InputGroupDropdownExample]
        })(() => <InputGroupDropdownExample split />)
    )
);
