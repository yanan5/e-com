import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";

import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

import { ExpandableSearch } from "../../base-ui-comp";
import "./TopBar.scss";

export default function PrimarySearchAppBar() {
  const matches = useMediaQuery("(max-width:980px)");

  return (
    <div className="AppBar">
      <AppBar position="static">
        <Toolbar>
          <Typography className="title" variant="h2">
            SHOPMATE
          </Typography>
          {/* {!matches && (
            <> */}
              <nav className="mainNav">
                <ul>
                  <li>
                    <Button>Women</Button>
                    <Grid container className="mega-menu">
                      <div class="arrow-up"></div>
                      <Grid item xs={12} sm={3}>
                        <ul>
                          <li>Shoes</li>
                          <li>Sneakers & Canvas</li>
                          <li>Sandals</li>
                          <li>Formal Shoes</li>
                          <li>Boots</li>
                          <li>Causal Shoes</li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <ul>
                          <li>Clothing</li>
                          <li>T-Shirts, Vests & Pools</li>
                          <li>Shorts</li>
                          <li>Shirts</li>
                          <li>Jeans</li>
                          <li>Trousers & Chinos</li>
                          <li>Coats, Jackets & Gliets</li>
                          <li>Sweatshirts</li>
                          <li>Underwear & Baselayers</li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <ul>
                          <li>Accessories</li>
                          <li>Watches</li>
                          <li>Bags & Wallets</li>
                          <li>Sunglasses & Eyewear</li>
                          <li>Hats & Caps</li>
                          <li>Socks</li>
                          <li>Jewellery</li>
                          <li>Belts</li>
                          <li>Formal & Accessories</li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <ul>
                          <li>Accessories</li>
                          <li>Sports Equipment</li>
                          <li>Sports Shoes</li>
                          <li>Sports Clothing</li>
                          <li>Hats & Caps</li>
                        </ul>
                        <ul>
                          <li>Grooming</li>
                          <li>Skincare</li>
                          <li>Shaving</li>
                          <li>Hair Care</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </li>
                  <li>
                    <Button>Men</Button>
                  </li>
                  <li>
                    <Button>Kids</Button>
                  </li>
                  <li>
                    <Button>Shoes</Button>
                  </li>
                  <li>
                    <Button>Brands</Button>
                  </li>
                </ul>
              </nav>
              <Box className="expandableSearchWrapper">
                <ExpandableSearch
                  onSearch={(v) => {
                    console.log(v);
                  }}
                />
              </Box>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <Badge badgeContent={4} color="secondary">
                  <LocalMallOutlinedIcon />
                </Badge>
              </IconButton>
            {/* </>
          )} */}
          {matches && (
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
