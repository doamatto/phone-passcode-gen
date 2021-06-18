package main

import (
	"io/ioutil"
	"os"

	"github.com/bep/golibsass/libsass"
	"github.com/evanw/esbuild/pkg/api"
)

var sassPlugin = api.Plugin{
	Name: "sassPlugin",
	Setup: func(build api.PluginBuild) {
		build.OnLoad(api.OnLoadOptions{Filter: `\.scss$`},
			func(args api.OnLoadArgs) (api.OnLoadResult, error) {
				scss, err := ioutil.ReadFile(args.Path)
				if err != nil {
					return api.OnLoadResult{}, err
				}
				transpiler, _ := libsass.New(libsass.Options{
					OutputStyle: libsass.CompressedStyle,
				})
				result, _ := transpiler.Execute(scss)
				return api.OnLoadResult{
					Contents: &result,
					Loader:   api.LoaderJSON,
				}, nil
			},
		)
	},
}

func main() {
	result := api.Build(api.BuildOptions{
		EntryPoints: []string{"gen.js"},
		Bundle:      true,
		Outfile:     "gen.min.js",
		Write:       true,
	})
	if len(result.Errors > 0) {
		os.Exit(1)
	}
	result2 := api.Build(api.BuildOptions{
		EntryPoints: []string{"style.scss"},
		Bundle:      true,
		Plugins:     []api.Plugin{sassPlugin},
		Outfile:     "gen.min.js",
		Write:       true,
	})
	if len(result2.Errors > 0) {
		os.Exit(1)
	}
}
