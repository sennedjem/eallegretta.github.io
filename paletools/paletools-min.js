window.paletools = window.paletools || {};
window.paletools['paletools-min'] = "IWZ1bmN0aW9uKGUpe2NvbnN0IHQ9WyIiLCIiLCIiLCJDQU5DRUwiLCIiLCIiLCJIRUxQIiwiIiwiQkFDS19TUEFDRSIsIlRBQiIsIiIsIiIsIkNMRUFSIiwiRU5URVIiLCJFTlRFUl9TUEVDSUFMIiwiIiwiU0hJRlQiLCJDT05UUk9MIiwiQUxUIiwiUEFVU0UiLCJDQVBTX0xPQ0siLCJLQU5BIiwiRUlTVSIsIkpVTkpBIiwiRklOQUwiLCJIQU5KQSIsIiIsIkVTQ0FQRSIsIkNPTlZFUlQiLCJOT05DT05WRVJUIiwiQUNDRVBUIiwiTU9ERUNIQU5HRSIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJTRUxFQ1QiLCJQUklOVCIsIkVYRUNVVEUiLCJQUklOVFNDUkVFTiIsIklOU0VSVCIsIkRFTEVURSIsIiIsIjAiLCIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCJDT0xPTiIsIlNFTUlDT0xPTiIsIkxFU1NfVEhBTiIsIkVRVUFMUyIsIkdSRUFURVJfVEhBTiIsIlFVRVNUSU9OX01BUksiLCJBVCIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwiT1NfS0VZIiwiIiwiQ09OVEVYVF9NRU5VIiwiIiwiU0xFRVAiLCJOVU1QQUQwIiwiTlVNUEFEMSIsIk5VTVBBRDIiLCJOVU1QQUQzIiwiTlVNUEFENCIsIk5VTVBBRDUiLCJOVU1QQUQ2IiwiTlVNUEFENyIsIk5VTVBBRDgiLCJOVU1QQUQ5IiwiTVVMVElQTFkiLCJBREQiLCJTRVBBUkFUT1IiLCJTVUJUUkFDVCIsIkRFQ0lNQUwiLCJESVZJREUiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJGMTEiLCJGMTIiLCJGMTMiLCJGMTQiLCJGMTUiLCJGMTYiLCJGMTciLCJGMTgiLCJGMTkiLCJGMjAiLCJGMjEiLCJGMjIiLCJGMjMiLCJGMjQiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJOVU1fTE9DSyIsIlNDUk9MTF9MT0NLIiwiV0lOX09FTV9GSl9KSVNITyIsIldJTl9PRU1fRkpfTUFTU0hPVSIsIldJTl9PRU1fRkpfVE9VUk9LVSIsIldJTl9PRU1fRkpfTE9ZQSIsIldJTl9PRU1fRkpfUk9ZQSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIkNJUkNVTUZMRVgiLCJFWENMQU1BVElPTiIsIkRPVUJMRV9RVU9URSIsIkhBU0giLCJET0xMQVIiLCJQRVJDRU5UIiwiQU1QRVJTQU5EIiwiVU5ERVJTQ09SRSIsIk9QRU5fUEFSRU4iLCJDTE9TRV9QQVJFTiIsIkFTVEVSSVNLIiwiUExVUyIsIlBJUEUiLCJIWVBIRU5fTUlOVVMiLCJPUEVOX0NVUkxZX0JSQUNLRVQiLCJDTE9TRV9DVVJMWV9CUkFDS0VUIiwiVElMREUiLCIiLCIiLCIiLCIiLCJWT0xVTUVfTVVURSIsIlZPTFVNRV9ET1dOIiwiVk9MVU1FX1VQIiwiIiwiIiwiU0VNSUNPTE9OIiwiRVFVQUxTIiwiQ09NTUEiLCJNSU5VUyIsIlBFUklPRCIsIlNMQVNIIiwiQkFDS19RVU9URSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIk9QRU5fQlJBQ0tFVCIsIkJBQ0tfU0xBU0giLCJDTE9TRV9CUkFDS0VUIiwiUVVPVEUiLCIiLCJNRVRBIiwiQUxUR1IiLCIiLCJXSU5fSUNPX0hFTFAiLCJXSU5fSUNPXzAwIiwiIiwiV0lOX0lDT19DTEVBUiIsIiIsIiIsIldJTl9PRU1fUkVTRVQiLCJXSU5fT0VNX0pVTVAiLCJXSU5fT0VNX1BBMSIsIldJTl9PRU1fUEEyIiwiV0lOX09FTV9QQTMiLCJXSU5fT0VNX1dTQ1RSTCIsIldJTl9PRU1fQ1VTRUwiLCJXSU5fT0VNX0FUVE4iLCJXSU5fT0VNX0ZJTklTSCIsIldJTl9PRU1fQ09QWSIsIldJTl9PRU1fQVVUTyIsIldJTl9PRU1fRU5MVyIsIldJTl9PRU1fQkFDS1RBQiIsIkFUVE4iLCJDUlNFTCIsIkVYU0VMIiwiRVJFT0YiLCJQTEFZIiwiWk9PTSIsIiIsIlBBMSIsIldJTl9PRU1fQ0xFQVIiLCIiXTtsZXQgbj0hMCxvPW5ldyBEYXRlLGE9bnVsbCxpPW51bGw7ZT0kLmV4dGVuZCh7YmFjazo0OSxlbmFibGVEaXNhYmxlOjkyLHRlY2g6ODQsbGlzdHM6e3VwOjM4LGRvd246NDAscHJldjozNyxuZXh0OjM5fSxzZWFyY2g6e2RlY01pbkJpZDozNyxpbmNNaW5CaWQ6MzksZGVjTWF4QmlkOjM1LGluY01heEJpZDozNixkZWNNaW5CdXk6NDYsaW5jTWluQnV5OjM0LGRlY01heEJ1eTo0MCxpbmNNYXhCdXk6Mzgsc2VhcmNoOjUwfSxyZXN1bHRzOntiaWQ6NTIsYnV5OjUxLHRyYW5zZmVyOjgyLGNsdWI6NjcscHJlc3NFbnRlcjohMCxhdXRvQnV5OiExLHByZXZlbnRCYWNrOiEwLHNlbGw6ODEsZGVjQmlkOjQ2LGluY0JpZDozNH19LGV8fHt9KTtjb25zdCBsPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixzPWUscj13aW5kb3cuc2VydmljZXMuTG9jYWxpemF0aW9uLEE9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgic2VhcmNoLmZpbHRlcnMucGxheWVycyIpLGM9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgiY2FyZC50aXRsZS5zcXVhZGZpdG5lc3MiKSxwPXdpbmRvdy5zZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoImNhcmQudGl0bGUuY29udHJhY3QiKSx1PShlLHQpPT57bGV0IG49bmV3IGwoZnVuY3Rpb24oZSxuKXsoZVswXS5hZGRlZE5vZGVzLmxlbmd0aHx8ZVswXS5yZW1vdmVkTm9kZXMubGVuZ3RoKSYmdCgpfSk7cmV0dXJuIG4ub2JzZXJ2ZShlLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLG59LGQ9KGUsdCk9PntpZigwPT1lLmxlbmd0aClyZXR1cm4hMTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KCJNb3VzZUV2ZW50cyIpO3JldHVybiBuLmluaXRFdmVudCh0KSxlWzBdLmRpc3BhdGNoRXZlbnQobiksITB9LEU9ZT0+KGU9PmQoZSwibW91c2Vkb3duIikpKGUpJiYoZT0+ZChlLCJtb3VzZXVwIikpKGUpLGg9KGUsdCk9PiQoIi5wbGF5ZXItc3RhdHMtZGF0YS1jb21wb25lbnQgLnZhbHVlIixlKVt0XS50ZXh0Q29udGVudCxiPXtvdnI6ZT0+JCgiLnJhdGluZyIsZSlbMF0udGV4dENvbnRlbnQscGFjOmU9PmgoZSwwKSxzaG86ZT0+aChlLDEpLHBhczplPT5oKGUsMiksZHJpOmU9PmgoZSwzKSxkZWY6ZT0+aChlLDQpLHBoeTplPT5oKGUsNSl9LE49JCgiLnV0LWZpZmEtaGVhZGVyLXZpZXciKSx2PWU9PntsZXQgdD0kKCIubGlzdEZVVEl0ZW0iLGUpO2lmKDA9PXQubGVuZ3RofHx0LmZpbHRlcignW3Byb2Nlc3NlZD0idHJ1ZSJdJykubGVuZ3RoPjApcmV0dXJuO2xldCBuPSQoIiNzcXVhZEZpdG5lc3MiKS52YWwoKSxvPSQoIiNjb250cmFjdHMiKS52YWwoKTt0LmVhY2goKGUsdCk9PntsZXQgYT0kKHQpLGk9ITE7aWYoYS5hdHRyKCJwcm9jZXNzZWQiLCJ0cnVlIiksInBsYXllciI9PT1QKWlmKDA9PShlPT4kKCQoIiNjYXJkLXR5cGUiKS52YWwoKSxlKS5sZW5ndGgpKHQpKWk9ITA7ZWxzZSBmb3IodmFyIGwgaW4gYil7dmFyIHM9JChgI18ke2x9YCkudmFsKCk7aWYocyYmYltsXSh0KSE9cyl7aT0hMDticmVha319ZWxzZSgiZml0bmVzcyI9PT1QJiYoZT0+JChgLm5hbWU6Y29udGFpbnMoJHtjfSlgLGUpLmxlbmd0aD4wPyQoIi5zdWJ0eXBlIixlKVswXS50ZXh0Q29udGVudDpudWxsKSh0KSE9bnx8ImNvbnRyYWN0cyI9PT1QJiYoZT0+JCgiLmNvbnRyYWN0cyIsZSkuaGFzQ2xhc3MoInJhcmUiKT8icmFyZSI6ImNvbW1vbiIpKHQpIT1vKSYmKGk9ITApO2EuYWRkQ2xhc3MoaT8iaGlkZSI6InNob3ciKX0pLCh0PSQoIi5saXN0RlVUSXRlbS5zaG93IixlKSkubGVuZ3RoPjAmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFKHQpfSwwKSxmaWx0ZXJMaXN0PSExfSxNPSgpPT57bGV0IGU9JCgiLmRpYWxvZy1ib2R5IC51dC1idXR0b24tZ3JvdXAgYnV0dG9uOmVxKDApIik7RShlKT9JKCk6c2V0VGltZW91dChNLDEwKX0sTz0oKT0+e2xldCBlPSQoIi5wYWdpbmF0ZWQiKTswIT1lLmxlbmd0aD8oTCgic2V0IGl0ZW1zIGZpbHRlciAtIGNvbnRhaW5lciBmb3VuZCIpLGkmJmkuZGlzY29ubmVjdCgpLHYoZSksYSYmYS5kaXNjb25uZWN0KCksYT11KGVbMF0sKCk9Pnt2KGUpfSkpOkwoInNldCBpdGVtcyBmaWx0ZXIgLSBubyBjb250YWluZXIiKX0sVD0oKT0+e25ldyBEYXRlLW88NTAwfHwobz1uZXcgRGF0ZSxFKCQoIi51dC1uYXZpZ2F0aW9uLWJ1dHRvbi1jb250cm9sIikpfHxzZXRUaW1lb3V0KFQsMTApKX0sbT0oKT0+JChgLnV0LWJ1dHRvbi1ncm91cCA+IGJ1dHRvbjpjb250YWlucygnJHtyLmxvY2FsaXplKCJpbmZvcGFuZWwubGFiZWwuc2VuZFRyYWRlUGlsZSIpfScpYCksQz0oKT0+JChgLnV0LWJ1dHRvbi1ncm91cCA+IGJ1dHRvbjpjb250YWlucygnJHtyLmxvY2FsaXplKCJpbmZvcGFuZWwubGFiZWwuc3RvcmVJbkNsdWIiKX0nKWApLGc9KCk9PiQoYC51dC1idXR0b24tZ3JvdXAgPiBidXR0b246Y29udGFpbnMoJyR7ci5sb2NhbGl6ZSgiaW5mb3BhbmVsLmxhYmVsLmRpc2NhcmQiKX0nKWApLEI9KCk9Pnt0cnl7bGV0IGU9e307aWYoJCgiLnV0LW1hcmtldC1zZWFyY2gtZmlsdGVycy12aWV3IikubGVuZ3RoPjApZVtzLnNlYXJjaC5kZWNNaW5CaWRdPSgoKT0+RSgkKCIuZGVjcmVtZW50LXZhbHVlIikpKSxlW3Muc2VhcmNoLmluY01pbkJpZF09KCgpPT5FKCQoIi5pbmNyZW1lbnQtdmFsdWUiKSkpLGVbcy5zZWFyY2guZGVjTWF4QmlkXT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZTplcSgxKSIpKSksZVtzLnNlYXJjaC5pbmNNYXhCaWRdPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlOmVxKDEpIikpKSxlW3Muc2VhcmNoLmRlY01pbkJ1eV09KCgpPT5FKCQoIi5kZWNyZW1lbnQtdmFsdWU6ZXEoMikiKSkpLGVbcy5zZWFyY2guaW5jTWluQnV5XT0oKCk9PkUoJCgiLmluY3JlbWVudC12YWx1ZTplcSgyKSIpKSksZVtzLnNlYXJjaC5kZWNNYXhCdXldPSgoKT0+RSgkKCIuZGVjcmVtZW50LXZhbHVlOmVxKDMpIikpKSxlW3Muc2VhcmNoLmluY01heEJ1eV09KCgpPT5FKCQoIi5pbmNyZW1lbnQtdmFsdWU6ZXEoMykiKSkpLGVbcy5zZWFyY2guc2VhcmNoXT0oKCk9PigoKT0+e0UoJCgiLmJ1dHRvbi1jb250YWluZXIgLmJ0bi1zdGFuZGFyZC5jYWxsLXRvLWFjdGlvbiIpKTtsZXQgZT0kKCIudXQtbmF2aWdhdGlvbi1jb250YWluZXItdmlldy0tY29udGVudCIpO2k9dShlWzBdLCgpPT57TygpfSl9KSgpKTtlbHNle2xldCB0PSQoIi5saXN0RlVUSXRlbS5zaG93Iiksbj10Lmxlbmd0aD4wLG89dC5wYXJlbnRzKCIucGFnaW5hdGVkLCAudXQtd2F0Y2gtbGlzdC12aWV3LCAudXQtdHJhbnNmZXItbGlzdC12aWV3Iik7aWYoMD09by5sZW5ndGgmJihvPXQucGFyZW50KCkpLG4mJiQoIi5EZXRhaWxQYW5lbCA+IC5iaWRPcHRpb25zIikubGVuZ3RoPjAmJihlW3MucmVzdWx0cy5iaWRdPSgoKT0+RSgkKCIuYmlkQnV0dG9uIikpKSxlW3MucmVzdWx0cy5idXldPSgoKT0+dm9pZChFKCQoIi5idXlCdXR0b24iKSkmJnMucmVzdWx0cy5wcmVzc0VudGVyJiZNKCkpKSxlW3MucmVzdWx0cy5kZWNCaWRdPSgoKT0+RSgkKCIuYmlkT3B0aW9ucyAuZGVjcmVtZW50LXZhbHVlIikpKSxlW3MucmVzdWx0cy5pbmNCaWRdPSgoKT0+RSgkKCIuYmlkT3B0aW9ucyAuaW5jcmVtZW50LXZhbHVlIikpKSksbiYmJCgiLkRldGFpbFBhbmVsID4gLnV0LWJ1dHRvbi1ncm91cCIpLmxlbmd0aD4wJiYoZVtzLnJlc3VsdHMudHJhbnNmZXJdPSgoKT0+RShtKCkpKSxlW3MucmVzdWx0cy5jbHViXT0oKCk9PkUoQygpKSksZVtzLnJlc3VsdHMuc2VsbF09KCgpPT5FKGcoKSkpKSxuKXtsZXQgdD0kKCIubGlzdEZVVEl0ZW0uc2VsZWN0ZWQiLG8pO2Vbcy5saXN0cy51cF09KCgpPT57bGV0IGU9dC5wcmV2KCk7Zm9yKDsxPT1lLmxlbmd0aCYmIWUuaGFzQ2xhc3MoInNob3ciKTspZT1lLnByZXYoKTswIT1lLmxlbmd0aCYmKEUoZSksby5jc3MoInBvc2l0aW9uIiwicmVsYXRpdmUiKS5zY3JvbGxUb3Aoby5zY3JvbGxUb3AoKStlLnBvc2l0aW9uKCkudG9wLWUuaGVpZ2h0KCkpKX0pLGVbcy5saXN0cy5kb3duXT0oKCk9PntsZXQgZT10Lm5leHQoKTtmb3IoOzE9PWUubGVuZ3RoJiYhZS5oYXNDbGFzcygic2hvdyIpOyllPWUubmV4dCgpOzAhPWUubGVuZ3RoJiYoRShlKSxvLmNzcygicG9zaXRpb24iLCJyZWxhdGl2ZSIpLnNjcm9sbFRvcChvLnNjcm9sbFRvcCgpK2UucG9zaXRpb24oKS50b3AtZS5oZWlnaHQoKSkpfSl9JCgiLnBhZ2luZ0NvbnRhaW5lciIpLmxlbmd0aD4wJiYoZVtzLmxpc3RzLnByZXZdPSgoKT0+RSgkKCIucGFnaW5nQ29udGFpbmVyIC5wcmV2OnZpc2libGUiKSkpLGVbcy5saXN0cy5uZXh0XT0oKCk9PkUoJCgiLnBhZ2luZ0NvbnRhaW5lciAubmV4dDp2aXNpYmxlIikpKSl9cmV0dXJuIGV9Y2F0Y2goZSl7TChlKX19LEk9KCk9Pnt2YXIgZT1tKCk7aWYoMD09ZS5sZW5ndGgpcmV0dXJuIHZvaWQgc2V0VGltZW91dChJLDUwKTtsZXQgbj0oZSxuKT0+e2lmKCFlKXJldHVybjtsZXQgbz1gIFsgJHt0W3MucmVzdWx0c1tuXV19IF1gLGE9ZS5odG1sKCk7YSYmLTE9PWEuaW5kZXhPZihvKSYmZS5odG1sKGUuaHRtbCgpK28pfTtuKGUsInRyYW5zZmVyIiksbihDKCksImNsdWIiKSxuKGcoKSwic2VsbCIpfSxMPWU9PnskKCIjbG9nIikudmFsKGAke25ldyBEYXRlfTogJHtlfVxuJHskKCIjbG9nIikudmFsKCl9YCl9O2xldCBQPSJwbGF5ZXIiOyQoYDxzZWxlY3Qgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSJwbGF5ZXIiPiR7QX08L29wdGlvbj48b3B0aW9uIHZhbHVlPSJmaXRuZXNzIj4ke2N9PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY29udHJhY3RzIj4ke3B9PC9vcHRpb24+PC9zZWxlY3Q+YCkuY2hhbmdlKGZ1bmN0aW9uKCl7UD10aGlzLnZhbHVlLGYuaGlkZSgpLFMuaGlkZSgpLFUuaGlkZSgpLCJwbGF5ZXIiPT10aGlzLnZhbHVlP2Yuc2hvdygpOiJmaXRuZXNzIj09PXRoaXMudmFsdWU/Uy5zaG93KCk6ImNvbnRyYWN0cyI9PT10aGlzLnZhbHVlJiZVLnNob3coKX0pLmFwcGVuZFRvKE4pO2xldCBmPSQoIjxkaXYgLz4iKS5jc3MoImRpc3BsYXkiLCJpbmxpbmUtYmxvY2siKS5hcHBlbmRUbyhOKTtmb3IodmFyIFIgaW4gYikkKCI8aW5wdXQgLz4iKS5hdHRyKCJpZCIsYF8ke1J9YCkuYXR0cigidHlwZSIsInRleHQiKS5hdHRyKCJzdHlsZSIsIndpZHRoOjUycHgiKS5hZGRDbGFzcygicGxheWVyYXR0ciIpLmF0dHIoInBsYWNlaG9sZGVyIixSLnRvVXBwZXJDYXNlKCkpLmFwcGVuZFRvKGYpOyQoJzxzZWxlY3QgaWQ9ImNhcmQtdHlwZSIgc3R5bGU9ImhlaWdodDo0NnB4Ij5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5pdGVtIj48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb246bm90KC5jaGFtcGlvbnMpIj5Db21tb248L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5yYXJlOm5vdCguY2hhbXBpb25zKSI+UmFyZTwvb3B0aW9ucz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb24uY2hhbXBpb25zIj5VQ0wgQ29tbW9uPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIucmFyZS5jaGFtcGlvbnMiPlVDTCBSYXJlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwnLnNwZWNpYWxzIC5wbGF5ZXJPdmVydmlld1tzdHlsZT0iY29sb3I6IHJnYigyNTUsIDIyNiwgMTQwKTsiXVwnPkdvbGQgSUY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCcuc3BlY2lhbHMgLnBsYXllck92ZXJ2aWV3W3N0eWxlPSJjb2xvcjogcmdiKDI0MiwgMjQyLCAyNDMpOyJdXCc+U2lsdmVyIElGPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwnLnNwZWNpYWxzIC5wbGF5ZXJPdmVydmlld1tzdHlsZT0iY29sb3I6IHJnYigyNTIsIDg0LCA5Nyk7Il1cJz5PVFc8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgJykuYXBwZW5kVG8oZik7bGV0IFM9JCgnPHNlbGVjdCBpZD0ic3F1YWRGaXRuZXNzIiBzdHlsZT0iaGVpZ2h0OjQ2cHgiPjxvcHRpb24gdmFsdWU9IiszMCI+KzMwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iKzIwIj4rMjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPSIrMTAiPisxMDwvb3B0aW9uPjwvc2VsZWN0PicpLmFwcGVuZFRvKE4pLmhpZGUoKSxVPSQoJzxzZWxlY3QgaWQ9ImNvbnRyYWN0cyIgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSJyYXJlIj5SYXJlPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY29tbW9uIj5Db21tb248L29wdGlvbj48L3NlbGVjdD4nKS5hcHBlbmRUbyhOKS5oaWRlKCk7KCgpPT57bGV0IGU9KGUsbixvLGEpPT5gJHtlfSAuJHthPyJpbiI6ImRlIn1jcmVtZW50LXZhbHVlOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6LTMwcHg7IGNvbnRlbnQ6ICdbICR7dFtzW25dW29dXX0gXScgfWAsbj0odCxuLG8pPT5lKGAuc2VhcmNoLXByaWNlcyAucHJpY2UtZmlsdGVyOm50aC1jaGlsZCgke3R9KWAsInNlYXJjaCIsbixvKSxvPShlLHQsbyk9PmAke24oZSx0KX0ke24oZSxvLCEwKX1gLGE9YFxuICAgICAgICAgICAgJHtvKDIsImRlY01pbkJpZCIsImluY01pbkJpZCIpfVxuICAgICAgICAgICAgJHtvKDMsImRlY01heEJpZCIsImluY01heEJpZCIpfVxuICAgICAgICAgICAgJHtvKDUsImRlY01pbkJ1eSIsImluY01pbkJ1eSIpfVxuICAgICAgICAgICAgJHtvKDYsImRlY01heEJ1eSIsImluY01heEJ1eSIpfVxuICAgICAgICAgICAgJHtlKCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIsInJlc3VsdHMiLCJkZWNCaWQiLCExKX1cbiAgICAgICAgICAgICR7ZSgiLkRldGFpbFBhbmVsID4gLmJpZE9wdGlvbnMiLCJyZXN1bHRzIiwiaW5jQmlkIiwhMCl9XG4gICAgICAgICAgICAudXQtbWFya2V0LXNlYXJjaC1maWx0ZXJzLXZpZXcgLmNhbGwtdG8tYWN0aW9uOmFmdGVyIHsgY29udGVudDogJ1sgJHt0W3Muc2VhcmNoLnNlYXJjaF19IF0nIH1cbiAgICAgICAgICAgIC51dC1uYXZpZ2F0aW9uLWJ1dHRvbi1jb250cm9sOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGZsb2F0OnJpZ2h0OyBtYXJnaW4tcmlnaHQ6MTJweDsgY29udGVudDogJ1sgJHt0W3MuYmFja119IF0nIH1cbiAgICAgICAgICAgIC5wYWdpbmdDb250YWluZXIgLnByZXY6YWZ0ZXIgeyBmb250LXNpemU6IDEwcHg7IGRpc3BsYXk6YmxvY2s7IGNvbnRlbnQ6ICdbICR7dFtzLmxpc3RzLnByZXZdfSBdJyB9XG4gICAgICAgICAgICAucGFnaW5nQ29udGFpbmVyIC5uZXh0OmFmdGVyIHsgZm9udC1zaXplOiAxMHB4OyBkaXNwbGF5OmJsb2NrOyBjb250ZW50OiAnWyAke3Rbcy5saXN0cy5uZXh0XX0gXScgfVxuICAgICAgICAgICAgLmJpZEJ1dHRvbjphZnRlciB7IGNvbnRlbnQ6ICcgWyAke3Rbcy5yZXN1bHRzLmJpZF19IF0nIH1cbiAgICAgICAgICAgIC5idXlCdXR0b246YmVmb3JlIHsgZmxvYXQ6cmlnaHQ7IG1hcmdpbi1sZWZ0OiAtNDBweDsgY29udGVudDogJyBbICR7dFtzLnJlc3VsdHMuYnV5XX0gXScgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWhvbWUgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc3F1YWQgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc2JjIHsgb3JkZXI6IDEgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXRyYW5zZmVyIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXN0b3JlIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWNsdWIgeyBvcmRlcjogMiB9XG4gICAgICAgICAgICAuaGlkZSB7IGRpc3BsYXk6IG5vbmUgfVxuICAgICAgICAgICAgYDt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIpO2kudHlwZT0idGV4dC9jc3MiLGkuaW5uZXJUZXh0PWEsZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpKX0pKCksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCJrZXlkb3duIixlPT57aWYoZS5rZXlDb2RlPT1zLmVuYWJsZURpc2FibGUmJihuPSFuLCQoIiNwYWxldG9vbHMtc3RhdHVzIikuY3NzKCJjb2xvciIsbj8ibGltZSI6InJlZCIpLnRleHQobj8iT04iOiJPRkYiKSksbilpZihlLmtleUNvZGUhPXMuYmFjaylpZihlLmtleUNvZGUhPXMudGVjaCl0cnl7bGV0IHQ9QigpW2Uua2V5Q29kZV07dCYmdCgpfWNhdGNoKGUpe0woZSl9ZWxzZSgoKT0+e2xldCBlPXBhcnNlSW50KCQoIi5EZXRhaWxQYW5lbCAuYXVjdGlvbkluZm8gLmN1cnJlbmN5LWNvaW5zIikudGV4dCgpLnJlcGxhY2UoIiwiLCIiKS5yZXBsYWNlKCIuIiwiIikpO2lmKCFlfHwkKCIuRGV0YWlsUGFuZWwgLnRlY2hBdmlvbiIpLmxlbmd0aD4wKXJldHVybjtsZXQgdD1lKzFlMyooTWF0aC5mbG9vcihlLzFlNCktMSkrMzUwMDskKCIuRGV0YWlsUGFuZWwgLmF1Y3Rpb25JbmZvIikuYXBwZW5kKGA8ZGl2IGNsYXNzPSJjb2x1bW4iPjxzcGFuIGNsYXNzPSJzZWNvbmRhcnkgc3ViSGVhZGluZyB0ZWNoQXZpb24iPlRlY2ggQXZpb248L3NwYW4+PHNwYW4gY2xhc3M9ImNvaW5zIHN1YkNvbnRlbnQiPiR7dH08L3NwYW4+PC9kaXY+YCl9KSgpO2Vsc2UgVCgpfSk7bGV0IEY9ZT0+JCgibmF2LnV0LXRhYi1iYXIiKS5hcHBlbmQoYDxidXR0b24gY2xhc3M9InV0LXRhYi1iYXItaXRlbSIgc3R5bGU9Im9yZGVyOjMiPiR7ZX08L2J1dHRvbj5gKSx5PShlLHQsbixvKT0+RihgPGEgc3R5bGU9InRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiR7b3x8ImluaGVyaXQifTtjdXJzb3I6cG9pbnRlcjtjdXJzb3I6aGFuZCIgdGFyZ2V0PSIke3R9IiBocmVmPSIke2V9Ij4ke259PC9hPmApO3koImh0dHA6Ly9lYWxsZWdyZXR0YS5naXRodWIuaW8vcGFsZXRvb2xzLyIsInBhbGV0b29scyIsJ1BhbGV0b29scyB2Mi4wLjUgPHNwYW4gaWQ9InBhbGV0b29scy1zdGF0dXMiIHN0eWxlPSJjb2xvcjpsaW1lIj5PTjwvc3Bhbj4nKSx5KCJodHRwczovL3R3aXR0ZXIuY29tL0ZGVkEiLCJ0d2l0dGVyIiwiQEZGVkEiLCIjMDA5OUZGO2ZvbnQtd2VpZ2h0OmJvbGQiKSxGKCc8Zm9ybSBpZD0icGFsZXRvb2xzLWRvbmF0ZSIgYWN0aW9uPSJodHRwczovL3d3dy5wYXlwYWwuY29tL2NnaS1iaW4vd2Vic2NyIiBtZXRob2Q9InBvc3QiIHRhcmdldD0iX2JsYW5rIj5cbiAgICA8aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJjbWQiIHZhbHVlPSJfZG9uYXRpb25zIiAvPlxuICAgIDxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9ImJ1c2luZXNzIiB2YWx1ZT0iWkFKWDZBRDZYUExSTiIgLz5cbiAgICA8aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJjdXJyZW5jeV9jb2RlIiB2YWx1ZT0iVVNEIiAvPlxuICAgIDxhIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjppbmhlcml0IiBvbmNsaWNrPSJqYXZhc2NyaXB0OiQoXCcjcGFsZXRvb2xzLWRvbmF0ZVwnKVswXS5zdWJtaXQoKSIgaHJlZj0iamF2YXNjcmlwdDp2b2lkKDApIj5QYWxldG9vbHMgRG9uYXRlPC9hPjwvZm9ybT48L2E+JykseSgiaHR0cHM6Ly93d3cuaWVzYS1nbG9iYWwuY29tIiwiaWVzYSIsJzxpbWcgc3JjPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC80UUJtUlhocFpnQUFUVTBBS2dBQUFBZ0FCQUVhQUFVQUFBQUJBQUFBUGdFYkFBVUFBQUFCQUFBQVJnRW9BQU1BQUFBQkFBSUFBQUV4QUFJQUFBQVFBQUFBVGdBQUFBQUFBQUJnQUFBQUFRQUFBR0FBQUFBQmNHRnBiblF1Ym1WMElEUXVNaTR4QVAvYkFFTUFFQXNNRGd3S0VBNE5EaElSRUJNWUtCb1lGaFlZTVNNbEhTZzZNejA4T1RNNE4wQklYRTVBUkZkRk56aFFiVkZYWDJKbmFHYytUWEY1Y0dSNFhHVm5ZLy9iQUVNQkVSSVNHQlVZTHhvYUwyTkNPRUpqWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkvL0FBQkVJQUVJQVFBTUJJZ0FDRVFFREVRSC94QUFmQUFBQkJRRUJBUUVCQVFBQUFBQUFBQUFBQVFJREJBVUdCd2dKQ2d2L3hBQzFFQUFDQVFNREFnUURCUVVFQkFBQUFYMEJBZ01BQkJFRkVpRXhRUVlUVVdFSEluRVVNb0dSb1FnalFySEJGVkxSOENRelluS0NDUW9XRnhnWkdpVW1KeWdwS2pRMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvT0VoWWFIaUltS2twT1VsWmFYbUptYW9xT2twYWFucUttcXNyTzB0YmEzdUxtNndzUEV4Y2JIeU1uSzB0UFUxZGJYMk5uYTRlTGo1T1htNStqcDZ2SHk4L1QxOXZmNCtmci94QUFmQVFBREFRRUJBUUVCQVFFQkFBQUFBQUFBQVFJREJBVUdCd2dKQ2d2L3hBQzFFUUFDQVFJRUJBTUVCd1VFQkFBQkFuY0FBUUlERVFRRklURUdFa0ZSQjJGeEV5SXlnUWdVUXBHaHNjRUpJek5TOEJWaWN0RUtGaVEwNFNYeEZ4Z1pHaVluS0NrcU5UWTNPRGs2UTBSRlJrZElTVXBUVkZWV1YxaFpXbU5rWldabmFHbHFjM1IxZG5kNGVYcUNnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmk0K1RsNXVmbzZlcnk4L1QxOXZmNCtmci8yZ0FNQXdFQUFoRURFUUEvQU9icWUyc3JxNy80OTdlV1gzUlNhMnRBdHJWTk9hK2xzL3Rkd2JnUVF4c2NMa2dIbXVvajAzVTdsQUx1L3dEc3NmOEF6eHMxQzRIcHVQTlZjUnlFZW1KcFVQMnJXWVczRTRodHQyRElmVWtkQUtzV25pKzR0VTJMWTJnVFBBUlN1UGF0dzZQYmFqclZ3bDYwc2tWbkZHaUt6OVFRU1NUNjF4S3BiSnFJU1IyZTFXWEJkZXBYUFg4cUFOS0hVSXRXdUJiNmxieDdwbTJwUEVvVmtKNlo5Ujlhclh1aGFqWlN1cjJzcklwT0pFVWxTUFd0dnhWRnBGdmF3UHB3aFc1M3JneE55RkE2a0Q4T2ExZEtXKzFmU3JhOVhVSllMZ0FxY0tDajRKNUsrdElEejdwUlhkM05tYnU1RmpyRm5DWnBVWm9idTMrVXNRTzRyaEtZanN2RGxwY2YyVFprd1BqN2VKZVYvZzIvZStsYitxMzExYXoyeVc4RHlJelpsWUlXMnJrRHQzNXorRllGOWQzTU9yNkpERlBJa1R3eGJrVmlBZWU0clBzWTljMVdlNSt5WDhvRVQ0SWFaaDFKeGo4cVF6V0YzcU1pdExOcDZ0SVNWTC9aU1daY2NMalBROC9sNzFYbCsxS3JtUFNZSFlPNEMvWWlQbEE0T2Y2VkxaYVA0aml2WUpKNzR0RXJndXZuc2NqUFBGVldqMW5WZGMxQ0t6djNpU0NRam1VcUFNa0FBRDZVQVhUYlRKS3dleXRXVlpWVEsyUFVFWkovRHBUN1BVdFZ0N2VOVHAvbHFIWEtSd0VBSmpMWTk4bitkVnY3QThTZjlCYi9BTWp2L2hRZEE4U1kvd0NRcm4vdHUvOEFoUUJ1NmlSL2JHbG4vcnIvQU9nVjVnZXBycjlKMW03dHRSYlM5YWJMY29rcmpKUmlNRG51RG5yWE02all6YWJleVdzNCtaRHdlekRzUlRRSFJhbi9BTWgzUWY4QXJqRC9BT2hWbmFiWVJYdHhkK1pxYTJSV1RnTWNidVQ3aXRTTFVORXZwdE91TG1lNGl1YmRFUUtCOHVRZTV4MHpUOVIwclFCTFBQY1NYVnRpWW82THlBM1gwUEJISXBBTXR0R3RvTG1LWStJWW1FYmh0dTRjNFBUNzFMZWFMWjNOOWNYS2E3Qkg1emw5b0k0eWY5Nm9QN0w4TS9aZnRQMjY3OHJmNWU3SDhXTTQrNzZVVGFYNFpnU0o1TDY3Q3pKdlRqcU1rZjNmYWdDaHJGaW1uUlJ2QnF5M1RPMkNxTjBIcjFOWDdHNDh2eFZZdE5Oc2pGdWhZczJCL3FxbmkwYnc0dXFMWm01dVpKdzJERTNRbnJqSUg5YVM2dDlCMXJVdDhlb1NvN3FBRVdJZ0FLUGNjREFvQXRlTGJXeTFHMSsxVzl6QWJtRWRCSU11dnA5YXpJV0hpVFNQczdrZjJsWnJtTmovQU10VTlQci9BSjlhTGpSZEN0VWhhYlU1MUV5YjAvZDhsZlhwUkJkNk5vaVRUNmZjVFhWMjZGRTNMdENaNzlLQU9hcnV2c2RycVdrVzl4TGV4b2swQWlsWitNdXYzVDlRY2ozRmNMV3hvZXN4YWVra0YzYi9BR20zWTdsVCs2Mk1aSDRHbUJyL0FQQ1B3ZjJPYlgrMWJiaWZ6Uy9iN3VNZGFMM1FJTGxMU0grMXJaWHQ0L0tJUFVuY2ZmM3hXaFpYK21haGFFV0ZsRTgzOFZzN0JHeHowN0hxZnpwLzJ2UzBJRnpwYzhNd1AzR2dMWlBzUndlbElDdU5IaFh4Q2RTT3BXK041YnkrL3dCMCsvc2Z5cXZwbmh5M2pkNDExS0NXU1g1U0U2N1A0Z09lcDZaOU0xb2g3SWxyaTYweGJXMkhQbTNEQldKOWw1T2F4ci94TFlMRk1tbTJSam1JS3BOMHdEd1QrVkFHUjRrblM0MXU0TVQ3b2tJUk9NQUFER0I3Vm1VVVV4QlJSUlFBQWxTQ0NRUjBJcnQvRDExY1NhVE0wazhyc3E4Rm5KSW9vb1kwY2pmenpUM1RHYVY1Q0RnRjJKeCtkVnFLS0JCUlJSUUIvOWs9IiBhbHQ9IiIgLz4nKX0oKTs=";