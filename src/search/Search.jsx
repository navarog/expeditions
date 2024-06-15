import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  ThemeProvider,
  Tooltip,
  createTheme,
} from "@mui/material";
import FlexSearch from "flexsearch";
import { useEffect, useState, useMemo } from "react";
import "./Search.css";
import TeamIcon from "../assets/icons/Team.png";
import ItemIcon from "../assets/icons/Item.png";
import MeteoriteIcon from "../assets/icons/Meteorite.png";
import QuestIcon from "../assets/icons/Quest.png";

const cardIndex = FlexSearch.Document({
  tokenize: "full",
  document: {
    id: "id",
    index: ["name", "ability", "meld", "benefit", "number"],
  },
});

import("../assets/cards.json").then((cards) => {
  cards.default
    .forEach((card) => cardIndex.add(card));
});

const fields = [
  "type",
  "core",
  "worker",
  // "conditions",
];

export function handleSearch(state, query) {
  const searchedIds = query.text
    ? [
        ...new Set(
          cardIndex
            .search(query.text)
            .reduce((acc, item) => [...acc, ...item.result], [])
        ),
      ]
    : state.allCards.map((card) => card.id);
  const filteredIds = searchedIds.filter((id) => {
    const card = state.allCards[id];
    return query.type[card.type] && query.expansion[card.expansion];
  });

  return { ...state, filteredCardIds: filteredIds.sort((a, b) => a - b) };
}

function Search({ cardState, triggerSearch }) {
  const defaultQuery = {
    text: "",
    type: {
      character: true,
      companion: true,
      item: true,
      meteorite: true,
      quest: true,
    },
    core: {
      Power: true,
      Guile: true,
    },
    worker: {
      Yellow: true,
      Blue: true,
      Green: true,
      Red: true,
      Purple: true,
    },
    expansion: {
      core: true,
      gc: true,
    }
  };
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    triggerSearch(query);
  }, [query, triggerSearch]);

  const stats = useMemo(() => {
    return cardState.filteredCardIds
      .map((id) => cardState.allCards[id])
      .reduce(
        (acc, card) => {
          fields.forEach((field) => {
            if (!acc[field][card[field]]) acc[field][card[field]] = 0;
            acc[field][card[field]]++;
          });
          return acc;
        },
        fields.reduce((obj, field) => ({ ...obj, [field]: {} }), {})
      );
  }, [cardState]);

  const theme = createTheme({
    typography: {
      fontFamily: "'League Gothic', sans-serif",
      fontSize: 16,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="search-container">
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="search-summary">
              <TextField
                variant="standard"
                label="Search the card names, abilities, or numbers"
                className="search-input"
                value={query.text}
                onChange={(e) => setQuery({ ...query, text: e.target.value })}
                onClick={(e) => e.stopPropagation()}
                placeholder="For example, vanquish..."
              />
              <div className="search-count-container">
                <Tooltip title="Filter out all character and companion cards">
                  <div
                    className={`search-count ${
                      query.type.character ? "" : "disabled"
                    }`}
                    onClick={(e) => {
                      setQuery({
                        ...query,
                        type: { ...query.type, character: !query.type.character, companion: !query.type.companion },
                      });
                      e.stopPropagation();
                    }}
                  >
                    {(stats.type.character || 0) + (stats.type.companion || 0)}
                    <img src={TeamIcon} alt="Team Icon" />
                  </div>
                </Tooltip>
                <Tooltip title="Filter out all item cards">
                  <div
                    className={`search-count ${
                      query.type.item ? "" : "disabled"
                    }`}
                    onClick={(e) => {
                      setQuery({
                        ...query,
                        type: { ...query.type, item: !query.type.item },
                      });
                      e.stopPropagation();
                    }}
                  >
                    {stats.type.item || 0}
                    <img src={ItemIcon} alt="Item Icon" />
                  </div>
                </Tooltip>
                <Tooltip title="Filter out all meteorite cards">
                  <div
                    className={`search-count ${
                      query.type.meteorite ? "" : "disabled"
                    }`}
                    onClick={(e) => {
                      setQuery({
                        ...query,
                        type: { ...query.type, meteorite: !query.type.meteorite },
                      });
                      e.stopPropagation();
                    }}
                  >
                    {stats.type.meteorite || 0}
                    <img src={MeteoriteIcon} alt="Meteorite Icon" />
                  </div>
                </Tooltip>
                <Tooltip title="Filter out all quest cards">
                  <div
                    className={`search-count ${
                      query.type.quest ? "" : "disabled"
                    }`}
                    onClick={(e) => {
                      setQuery({
                        ...query,
                        type: { ...query.type, quest: !query.type.quest },
                      });
                      e.stopPropagation();
                    }}
                  >
                    {stats.type.quest || 0}
                    <img src={QuestIcon} alt="Quest Icon" />
                  </div>
                </Tooltip>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="search-details">
              <Tooltip title="Filter out expansions">
                <div className="row reverse">
                  {Object.keys(query.expansion).map((expansion) => (
                  <img
                    className={`expansion ${
                      query.expansion[expansion] ? "" : "disabled"
                    }`}
                    key={expansion}
                    onClick={() => 
                      setQuery({
                        ...query,
                        expansion: { ...query.expansion, [expansion]: !query.expansion[expansion] },
                      })
                    }
                    src={require(`../assets/icons/${expansion}-expansion.png`)}
                    alt={`${expansion} expansion`}
                  />
                  ))}
                </div>
              </Tooltip>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}

export default Search;
