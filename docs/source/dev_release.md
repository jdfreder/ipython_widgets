Creating a release
==================

Release a new version of the widgets on PyPI and npm
----------------------------------------------------

1.  Checkout `master` branch of [ipywidgets repo](https://github.com/ipython/ipywidgets).
2.  cd into the ipywidgets subfolder of the repo root.
3.  Then run the following from the command line, replacing the square bracketed content with appropriate values:

``` sourceCode
npm version [patch/minor/major]
npm publish
git push [upstream master]
git push [upstream] --tags
```

**On GitHub:**

1.  Go to <https://github.com/ipython/ipywidgets/milestones> and click **Close** for the released version.
2.  Make sure patch, minor, and/or major milestones exist as appropriate. If not, create the milestone using GitHub's interface.

